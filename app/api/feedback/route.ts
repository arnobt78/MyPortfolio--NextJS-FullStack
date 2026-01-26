import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

// Ensure Node.js runtime (not Edge) for Nodemailer/SMTP
export const runtime = "nodejs";

// TypeScript interfaces for type safety
interface FeedbackData {
  type: "feedback" | "issue";
  rating?: number;
  comment?: string;
  email?: string;
}

interface FeedbackResponse {
  success?: boolean;
  message?: string;
  error?: string;
  details?: string;
}

// Helper function to validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Helper function to sanitize input (prevent XSS)
function sanitizeInput(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim();
}

// Helper function to escape HTML for safe display in email
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Sends an auto-reply email to the user who submitted feedback/issue
 * Similar to send-auto-reply route but tailored for chatbot feedback
 */
async function sendAutoReply(
  userEmail: string,
  type: "feedback" | "issue",
  referenceNumber: string,
  rating?: number,
  comment?: string
): Promise<void> {
  try {
    // Sanitize inputs for email
    const sanitizedEmail = sanitizeInput(userEmail);
    const sanitizedComment = comment ? escapeHtml(comment) : "";

    // Format current date/time
    const currentDate = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // Create friendly auto-reply subject with timestamp
    const subject = `Thank You for Your ${type === "feedback" ? "Feedback" : "Issue Report"} - Ref #${referenceNumber} | ${currentDate} ${currentTime}`;

    // Create message preview
    const messagePreview =
      sanitizedComment && sanitizedComment.length > 200
        ? sanitizedComment.substring(0, 200) + "..."
        : sanitizedComment || "No additional comments provided";

    // Create HTML email content
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You - Chatbot Feedback</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap');
            
            body {
                font-family: 'JetBrains Mono', monospace;
                background-color: #f5f5f5;
                margin: 0;
                padding: 20px;
                line-height: 1.6;
            }
            
            .email-container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            }
            
            .header {
                background: linear-gradient(135deg, #1c1c22 0%, #00ff99 100%);
                color: white;
                padding: 30px;
                text-align: center;
            }
            
            .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: 700;
                letter-spacing: -0.5px;
            }
            
            .header p {
                margin: 10px 0 0 0;
                font-size: 16px;
                opacity: 0.9;
            }
            
            .content {
                padding: 40px 30px;
                color: #1c1c22;
            }
            
            .greeting {
                font-size: 18px;
                margin-bottom: 20px;
                color: #1c1c22;
            }
            
            .message-box {
                background-color: #f8f9fa;
                border-left: 4px solid #00ff99;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
            }
            
            .message-box h3 {
                color: #00ff99;
                margin: 0 0 15px 0;
                font-size: 16px;
                font-weight: 600;
            }
            
            .reference-info {
                background-color: #f0f8ff;
                border: 1px solid #e0e7ff;
                padding: 15px;
                margin: 20px 0;
                border-radius: 8px;
                text-align: center;
            }
            
            .reference-number {
                font-size: 18px;
                font-weight: 700;
                color: #00ff99;
                margin-bottom: 5px;
            }
            
            .date-info {
                font-size: 14px;
                color: #666;
            }
            
            .next-steps {
                margin: 30px 0;
            }
            
            .next-steps h3 {
                color: #1c1c22;
                font-size: 18px;
                margin-bottom: 15px;
            }
            
            .next-steps ul {
                margin: 0;
                padding-left: 20px;
            }
            
            .next-steps li {
                margin-bottom: 8px;
                color: #1c1c22;
            }
            
            .closing {
                margin-top: 30px;
                font-style: italic;
                color: #666;
            }
            
            .signature {
                margin-top: 20px;
                font-weight: 600;
                color: #1c1c22;
            }
            
            .separator {
                border-top: 1px solid #e0e0e0;
                margin: 30px 0;
            }
            
            .footer {
                background-color: #f8f9fa;
                padding: 30px;
                text-align: center;
                color: #666;
            }
            
            .rating-display {
                font-size: 20px;
                color: #ffc107;
                margin: 10px 0;
            }
            
            .disclaimer {
                font-size: 12px;
                color: #999 !important;
                margin: 20px 30px 30px 30px;
                padding: 15px;
                font-style: italic;
                text-align: center;
            }
            
            @media (max-width: 600px) {
                .email-container {
                    margin: 10px;
                }
                
                .header, .content, .footer {
                    padding: 20px;
                }
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>Thank You for Your ${type === "feedback" ? "Feedback" : "Issue Report"}!</h1>
                <p>Your input helps us improve</p>
            </div>
            
            <div class="content">
                <div class="greeting">
                    Dear Valued User,
                </div>
                
                <p>Thank you for taking the time to ${type === "feedback" ? "share your feedback" : "report this issue"}. I've successfully received your ${type === "feedback" ? "feedback" : "report"} and truly appreciate your input.</p>
                
                <div class="message-box">
                    <h3>📧 Your ${type === "feedback" ? "Feedback" : "Issue Report"} Details:</h3>
                    ${rating ? `<p><strong>Rating:</strong> <span class="rating-display">${"★".repeat(rating)}${"☆".repeat(5 - rating)} (${rating}/5)</span></p>` : ""}
                    ${sanitizedComment ? `<p><strong>${type === "feedback" ? "Comment" : "Description"}:</strong> ${messagePreview}</p>` : ""}
                </div>
                
                <div class="reference-info">
                    <div class="reference-number">Reference #${referenceNumber}</div>
                    <div class="date-info">Received on ${currentDate} at ${currentTime}</div>
                </div>
                
                <div class="next-steps">
                    <h3>🚀 What happens next?</h3>
                    <ul>
                        <li>I'll review your ${type === "feedback" ? "feedback" : "issue report"} as soon as possible</li>
                        <li>You'll receive a personalized response via email within 24-48 hours</li>
                        <li>If needed, I'll reach out to discuss your ${type === "feedback" ? "suggestions" : "concerns"} in more detail</li>
                        <li>Your input helps me improve the chatbot experience for everyone</li>
                    </ul>
                </div>
                
                <div class="closing">
                    <p>I appreciate your patience and look forward to addressing your ${type === "feedback" ? "feedback" : "concerns"} soon.</p>
                </div>
                
                <div class="signature">
                    Best regards,<br>
                    Arnob Mahmud<br>
                    <em>Full-Stack Developer & Automation Engineer</em>
                </div>
            </div>
            
            <div class="separator"></div>
            
            <div class="disclaimer">
                This is an automated message. Please do not reply to this email. For assistance, please contact us at arnobt78@gmail.com or call +49 157 34664351
            </div>
        </div>
    </body>
    </html>
    `;

    // Create Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // use STARTTLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `Arnob Mahmud Portfolio <${process.env.EMAIL_USER}>`,
      to: sanitizedEmail,
      subject: subject,
      html: htmlContent,
      replyTo: process.env.EMAIL_USER, // keep thread centralized
    } as const;

    await transporter.sendMail(mailOptions);
  } catch (error) {
    // Log error but don't throw - auto-reply failure shouldn't break the main flow
    console.error("Auto-reply error:", error);
  }
}

/**
 * POST /api/feedback
 * Handles feedback and issue reports from chatbot widget
 * Sends email notification using Gmail SMTP
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as FeedbackData;
    const { type, rating, comment, email } = body;

    // Validation
    if (!type || (type === "feedback" && !rating)) {
      return new Response(
        JSON.stringify({
          error: "Validation failed",
          details: type === "feedback" 
            ? "Rating is required for feedback" 
            : "Invalid feedback type",
        } as FeedbackResponse),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validate email if provided
    if (email && !isValidEmail(email)) {
      return new Response(
        JSON.stringify({
          error: "Validation failed",
          details: "Please provide a valid email address",
        } as FeedbackResponse),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Sanitize inputs
    const sanitizedEmail = email ? sanitizeInput(email) : "";
    const sanitizedComment = comment ? sanitizeInput(comment) : "";

    // Generate reference number with timestamp and random number
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 10000);
    const referenceNumber = `CHATBOT-${timestamp}-${randomNum}`;

    // Format current date/time
    const currentDate = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // Create email subject with timestamp and random number to avoid spam
    const subjectPrefix = type === "feedback" 
      ? `Chatbot Feedback (${rating}/5)` 
      : "Chatbot Issue Report";
    const subject = `${subjectPrefix} - Ref #${referenceNumber} | ${currentDate} ${currentTime}`;

    // Create email content
    const emailContent = `
Type: ${type === "feedback" ? "Feedback/Rating" : "Issue Report"}
${rating ? `Rating: ${rating}/5` : ""}
${sanitizedComment ? `Comment: ${sanitizedComment}` : "No comment provided"}
${sanitizedEmail ? `Email: ${sanitizedEmail}` : "No email provided"}
Reference Number: ${referenceNumber}
Submitted: ${currentDate} at ${currentTime}
    `.trim();

    // Create HTML email content
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subjectPrefix} - Chatbot Widget</title>
        <style>
            body {
                font-family: 'JetBrains Mono', monospace, Arial, sans-serif;
                background-color: #f5f5f5;
                margin: 0;
                padding: 20px;
                line-height: 1.6;
            }
            .email-container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            }
            .header {
                background: linear-gradient(135deg, #1c1c22 0%, #00ff99 100%);
                color: white;
                padding: 30px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 700;
            }
            .content {
                padding: 30px;
                color: #1c1c22;
            }
            .info-box {
                background-color: #f8f9fa;
                border-left: 4px solid #00ff99;
                padding: 15px;
                margin: 15px 0;
                border-radius: 8px;
            }
            .info-row {
                margin: 10px 0;
                padding: 8px 0;
                border-bottom: 1px solid #e0e0e0;
            }
            .info-row:last-child {
                border-bottom: none;
            }
            .info-label {
                font-weight: 600;
                color: #00ff99;
                display: inline-block;
                min-width: 120px;
            }
            .info-value {
                color: #1c1c22;
            }
            .rating-display {
                font-size: 24px;
                color: #ffc107;
            }
            .reference-box {
                background-color: #f0f8ff;
                border: 1px solid #e0e7ff;
                padding: 15px;
                margin: 20px 0;
                border-radius: 8px;
                text-align: center;
            }
            .reference-number {
                font-size: 18px;
                font-weight: 700;
                color: #00ff99;
                margin-bottom: 5px;
            }
            .footer {
                background-color: #f8f9fa;
                padding: 20px;
                text-align: center;
                color: #666;
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>${subjectPrefix}</h1>
                <p>Chatbot Widget Submission</p>
            </div>
            <div class="content">
                <div class="info-box">
                    <div class="info-row">
                        <span class="info-label">Type:</span>
                        <span class="info-value">${type === "feedback" ? "Feedback/Rating" : "Issue Report"}</span>
                    </div>
                    ${rating ? `
                    <div class="info-row">
                        <span class="info-label">Rating:</span>
                        <span class="info-value rating-display">${"★".repeat(rating)}${"☆".repeat(5 - rating)} (${rating}/5)</span>
                    </div>
                    ` : ""}
                    ${sanitizedComment ? `
                    <div class="info-row">
                        <span class="info-label">Comment:</span>
                        <span class="info-value">${sanitizedComment}</span>
                    </div>
                    ` : ""}
                    ${sanitizedEmail ? `
                    <div class="info-row">
                        <span class="info-label">Email:</span>
                        <span class="info-value">${sanitizedEmail}</span>
                    </div>
                    ` : ""}
                    <div class="info-row">
                        <span class="info-label">Submitted:</span>
                        <span class="info-value">${currentDate} at ${currentTime}</span>
                    </div>
                </div>
                <div class="reference-box">
                    <div class="reference-number">Reference #${referenceNumber}</div>
                </div>
            </div>
            <div class="footer">
                <p>This is an automated notification from the Chatbot Widget.</p>
            </div>
        </div>
    </body>
    </html>
    `;

    // Create Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // use STARTTLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Determine recipient email (use FEEDBACK_EMAIL if available, otherwise EMAIL_USER)
    const recipientEmail = process.env.FEEDBACK_EMAIL || process.env.EMAIL_USER || "arnobt78@gmail.com";

    const mailOptions = {
      from: `Chatbot Widget <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      replyTo: sanitizedEmail || process.env.EMAIL_USER,
      subject: subject,
      text: emailContent,
      html: htmlContent,
    } as const;

    await transporter.sendMail(mailOptions);

    // Send auto-reply to user if email is provided
    if (sanitizedEmail && isValidEmail(sanitizedEmail)) {
      await sendAutoReply(
        sanitizedEmail,
        type,
        referenceNumber,
        rating,
        comment
      );
    }

    // Track via Google Analytics (client-side, so this won't work server-side)
    // This would need to be handled on the client side

    const origin = req.headers.get("origin");
    const allowedOrigin = origin || "*";

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your feedback!",
      } as FeedbackResponse),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": allowedOrigin,
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Cookie",
        },
      }
    );
  } catch (error) {
    console.error("Feedback error:", error);

    // Enhanced error handling
    if (error instanceof Error) {
      // Check for specific SMTP errors
      if (error.message.includes("EAUTH")) {
        return new Response(
          JSON.stringify({
            error: "Authentication failed",
            details:
              "Email service authentication error. Please try again later.",
          } as FeedbackResponse),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      if (error.message.includes("ECONNECTION")) {
        return new Response(
          JSON.stringify({
            error: "Connection failed",
            details:
              "Unable to connect to email server. Please try again later.",
          } as FeedbackResponse),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }

    const origin = req.headers.get("origin");
    const allowedOrigin = origin || "*";

    return new Response(
      JSON.stringify({
        error: "Failed to submit feedback",
        details: error instanceof Error ? error.message : "Unknown error occurred",
      } as FeedbackResponse),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": allowedOrigin,
          "Access-Control-Allow-Credentials": "true",
        },
      }
    );
  }
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin");
  const allowedOrigin = origin || "*";
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Cookie",
    },
  });
}
