import { GoogleGenerativeAI } from '@google/generative-ai';
import { generateText, streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { createGroq } from '@ai-sdk/groq';

// Message type for AI SDK
interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

// AI Model fallback chain: Gemini (primary) → OpenRouter → Groq → Hugging Face → OpenAI (backup)
interface MessageContent {
  text?: string;
  content?: string;
  message?: string;
}

export async function getAIResponse(
  messages: Array<{ role: string; content: string | unknown[] | MessageContent }>,
  context?: string,
  stream: boolean = true
) {
  const systemPrompt = `You are a helpful assistant for Arnob Mahmud's portfolio website. Be friendly, professional, and concise. Use the FAQ context to give accurate answers. If you don't know something, say so.`;

  // Normalize messages: ensure content is always a string
  // This handles various formats: string, array of objects, etc.
  const normalizedMessages: Message[] = messages
    .slice(-6) // Last 6 messages for context
    .map((msg) => {
      let content: string;
      if (typeof msg.content === 'string') {
        content = msg.content;
      } else if (Array.isArray(msg.content)) {
        // Handle array format: extract text from objects like [{ type: 'input_text', text: '...' }] or [{ type: 'output_text', text: '...' }]
        content = (msg.content as unknown[])
          .map((item: unknown) => {
            if (typeof item === 'string') return item;
            if (item && typeof item === 'object') {
              const itemObj = item as MessageContent;
              return itemObj.text || itemObj.content || itemObj.message || '';
            }
            return String(item || '');
          })
          .filter((text: string) => text.length > 0) // Remove empty strings
          .join(' ');
      } else if (msg.content && typeof msg.content === 'object') {
        // Handle object format: { text: '...' } or { content: '...' }
        const contentObj = msg.content as MessageContent;
        content = contentObj.text || contentObj.content || contentObj.message || '';
      } else {
        content = String(msg.content || '');
      }
      // Filter out empty messages
      if (!content || content.trim().length === 0) {
        return null;
      }
      // Ensure role is valid
      const role = msg.role === 'assistant' ? 'assistant' : msg.role === 'system' ? 'system' : 'user';
      return {
        role: role as 'system' | 'user' | 'assistant',
        content: content.trim(),
      };
    })
    .filter((msg): msg is Message => msg !== null); // Remove null messages

  const fullMessages: Message[] = [
    { role: 'system', content: systemPrompt + (context ? `\n\nFAQ Context:\n${context}` : '') },
    ...normalizedMessages,
  ];

  // Helper function to prepare AI SDK messages
  const prepareAIMessages = () => {
    const systemMessage = fullMessages.find(msg => msg.role === 'system');
    const conversationMessages = fullMessages.filter(msg => msg.role !== 'system');
    
    const aiMessages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [];
    
    // Add system message if present
    if (systemMessage && typeof systemMessage.content === 'string') {
      aiMessages.push({
        role: 'system',
        content: systemMessage.content,
      });
    }
    
    // Add conversation messages, ensuring content is always a string
    for (const msg of conversationMessages) {
      let contentStr: string;
      if (typeof msg.content === 'string') {
        contentStr = msg.content;
      } else if (Array.isArray(msg.content)) {
        // Extract text from array format
        contentStr = (msg.content as unknown[])
          .map((item: unknown) => {
            if (typeof item === 'string') return item;
            if (item && typeof item === 'object') {
              const itemObj = item as { text?: string; content?: string; message?: string };
              return itemObj.text || itemObj.content || itemObj.message || '';
            }
            return String(item || '');
          })
          .filter((text: string) => text.length > 0)
          .join(' ');
      } else {
        contentStr = String(msg.content || '');
      }
      
      if (contentStr && contentStr.trim().length > 0) {
        aiMessages.push({
          role: msg.role as 'user' | 'assistant',
          content: contentStr.trim(),
        });
      }
    }
    
    return aiMessages;
  };

  // Primary: Gemini (reliable and free)
  // Use stable model names from deprecation table (gemini-2.5-flash, gemini-2.5-pro)
  const geminiModels = ['gemini-2.5-flash', 'gemini-2.5-pro'];
  
  for (const modelName of geminiModels) {
    try {
      const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY!);
      const model = genAI.getGenerativeModel({ model: modelName });
      
      // Build prompt with system message and context
      let prompt = systemPrompt + (context ? `\n\nFAQ Context:\n${context}` : '') + '\n\n';
      prompt += normalizedMessages
        .map((m) => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
        .join('\n\n');
      
      const result = await model.generateContentStream(prompt);
    
      // Convert Gemini stream to AI SDK format
      if (stream) {
        return {
          textStream: (async function* () {
            for await (const chunk of result.stream) {
              const text = chunk.text();
              if (text) yield text;
            }
          })(),
        };
      } else {
        const response = await result.response;
        return { text: response.text() };
      }
    } catch (error) {
      console.log(`Gemini model ${modelName} failed, trying next...`, error);
      continue; // Try next model
    }
  }
  
  // If all Gemini models failed, log and try fallback
  console.log('All Gemini models failed, trying OpenRouter GPT...');

  // Fallback 1: OpenRouter GPT
  // Support both OPENROUTER_API_KEY and OpenRouter_API_KEY env var names
  const openRouterApiKey = process.env.OPENROUTER_API_KEY || process.env.OpenRouter_API_KEY;
  if (openRouterApiKey) {
    try {
      const openaiClient = createOpenAI({
        baseURL: 'https://openrouter.ai/api/v1',
        apiKey: openRouterApiKey,
      headers: {
        'HTTP-Referer': process.env.NEXT_PUBLIC_CHATBOT_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arnobmahmud.com',
        'X-Title': 'Portfolio Chatbot',
      },
    });

    const aiMessages = prepareAIMessages();

    if (stream) {
      return await streamText({
        model: openaiClient('openai/gpt-4o-mini'),
        messages: aiMessages,
        temperature: 0.7,
      });
    } else {
      return await generateText({
        model: openaiClient('openai/gpt-4o-mini'),
        messages: aiMessages,
        temperature: 0.7,
      });
    }
    } catch (error) {
      console.error('OpenRouter failed, trying Groq...', error);
    }
  }

  // Fallback 2: Groq (fast and free tier available)
  // Support both GROQ_API_KEY and Groq_Llama_API_KEY env var names
  const groqApiKey = process.env.GROQ_API_KEY || process.env.Groq_Llama_API_KEY;
  if (groqApiKey) {
    try {
      console.log('Trying Groq...');
      const groq = createGroq({
        apiKey: groqApiKey,
      });

      const aiMessages = prepareAIMessages();

      if (stream) {
        return await streamText({
          model: groq('llama-3.1-70b-versatile'),
          messages: aiMessages,
          temperature: 0.7,
        });
      } else {
        return await generateText({
          model: groq('llama-3.1-70b-versatile'),
          messages: aiMessages,
          temperature: 0.7,
        });
      }
    } catch (error) {
      console.error('Groq failed, trying Hugging Face...', error);
    }
  }

  // Fallback 3: Hugging Face Inference API (free models available)
  // Support both HUGGING_FACE_API_KEY and Hugging_Face_Inference_API_KEY env var names
  const huggingFaceApiKey = process.env.HUGGING_FACE_API_KEY || process.env.Hugging_Face_Inference_API_KEY;
  if (huggingFaceApiKey) {
    try {
      console.log('Trying Hugging Face Inference API...');
      
      // Format messages for Hugging Face chat models
      // Use Mistral-7B-Instruct as it's a good free chat model
      const systemMessage = fullMessages.find(msg => msg.role === 'system');
      const conversationMessages = fullMessages.filter(msg => msg.role !== 'system');
      
      // Build prompt in Mistral chat format
      let prompt = '';
      if (systemMessage) {
        prompt += `<s>[INST] ${systemMessage.content} [/INST]</s>\n`;
      }
      
      // Format conversation history
      for (let i = 0; i < conversationMessages.length; i++) {
        const msg = conversationMessages[i];
        if (msg.role === 'user') {
          prompt += `[INST] ${msg.content} [/INST]`;
        } else if (msg.role === 'assistant') {
          prompt += ` ${msg.content}</s>`;
        }
        if (i < conversationMessages.length - 1) {
          prompt += '\n';
        }
      }
      
      // If last message is user, add assistant tag
      if (conversationMessages.length > 0 && conversationMessages[conversationMessages.length - 1].role === 'user') {
        prompt += ' ';
      }

      const response = await fetch(
        'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2',
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${huggingFaceApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            inputs: prompt,
            parameters: {
              max_new_tokens: 512,
              temperature: 0.7,
              return_full_text: false,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Hugging Face API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      // Handle Hugging Face response format
      let generatedText = '';
      if (Array.isArray(data) && data.length > 0) {
        generatedText = data[0].generated_text || data[0].text || '';
      } else if (data.generated_text) {
        generatedText = data.generated_text;
      } else if (data.text) {
        generatedText = data.text;
      } else if (typeof data === 'string') {
        generatedText = data;
      }

      // Clean up the response (remove prompt if included)
      generatedText = generatedText.replace(prompt, '').trim();

      if (stream) {
        return {
          textStream: (async function* () {
            // Simulate streaming by yielding chunks
            const words = generatedText.split(' ');
            for (const word of words) {
              yield word + ' ';
              // Small delay to simulate streaming
              await new Promise(resolve => setTimeout(resolve, 10));
            }
          })(),
        };
      } else {
        return { text: generatedText };
      }
    } catch (error) {
      console.error('Hugging Face failed, trying OpenAI...', error);
    }
  }

  // Fallback 4: OpenAI Direct (if API key is available)
  if (process.env.OPENAI_API_KEY) {
    try {
      console.log('Trying OpenAI direct...');
      const openaiClient = createOpenAI({
        apiKey: process.env.OPENAI_API_KEY!,
      });

      const aiMessages = prepareAIMessages();

      if (stream) {
        return await streamText({
          model: openaiClient('gpt-4o-mini'),
          messages: aiMessages,
          temperature: 0.7,
        });
      } else {
        return await generateText({
          model: openaiClient('gpt-4o-mini'),
          messages: aiMessages,
          temperature: 0.7,
        });
      }
    } catch (error) {
      console.error('OpenAI direct failed:', error);
    }
  }

  throw new Error('All AI models failed');
}
