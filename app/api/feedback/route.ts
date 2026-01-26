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
