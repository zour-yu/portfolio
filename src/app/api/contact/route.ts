import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Strict Server-Side Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "A valid name with at least 2 characters is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail =
      process.env.CONTACT_EMAIL || "yasithumindu@gmail.com";

    // Helpful check if API key hasn't been set in .env.local yet
    if (!apiKey || apiKey.trim() === "" || apiKey.includes("your_api_key_here")) {
      return NextResponse.json(
        {
          error: "RESEND_API_KEY_MISSING",
          message:
            "Resend API key is missing. Please add your RESEND_API_KEY to .env.local.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email.trim(),
      subject: `New Portfolio Inquiry from ${name.trim()}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #09090b; color: #f4f4f5; margin: 0; padding: 32px 16px; }
              .container { max-width: 600px; margin: 0 auto; background: #121217; border: 1px solid #27272a; border-radius: 12px; padding: 28px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
              .header { border-bottom: 1px solid #27272a; padding-bottom: 16px; margin-bottom: 24px; }
              .badge { display: inline-block; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); color: #38bdf8; font-size: 11px; font-family: monospace; padding: 4px 10px; rounded-full; border-radius: 9999px; text-transform: uppercase; font-weight: 600; }
              .title { font-size: 20px; font-weight: bold; color: #ffffff; margin: 12px 0 0 0; }
              .meta-box { background: #18181b; border: 1px solid #27272a; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px; }
              .meta-row { display: flex; font-size: 13px; margin: 4px 0; }
              .meta-label { color: #a1a1aa; width: 80px; font-family: monospace; }
              .meta-value { color: #ffffff; font-weight: 500; }
              .message-title { font-size: 13px; font-family: monospace; color: #a1a1aa; text-transform: uppercase; margin-bottom: 8px; }
              .message-content { background: #09090b; border: 1px solid #27272a; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #e4e4e7; white-space: pre-wrap; word-break: break-word; }
              .footer { margin-top: 24px; border-top: 1px solid #27272a; padding-top: 14px; font-size: 11px; color: #71717a; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <span class="badge">Portfolio Inquiry</span>
                <h1 class="title">New Message from ${escapeHtml(name.trim())}</h1>
              </div>

              <div class="meta-box">
                <div class="meta-row">
                  <span class="meta-label">From:</span>
                  <span class="meta-value">${escapeHtml(name.trim())}</span>
                </div>
                <div class="meta-row">
                  <span class="meta-label">Email:</span>
                  <span class="meta-value">${escapeHtml(email.trim())}</span>
                </div>
              </div>

              <div class="message-title">Message Body</div>
              <div class="message-content">${escapeHtml(message.trim())}</div>

              <div class="footer">
                Sent from your portfolio contact form. Hit 'Reply' to respond directly to ${escapeHtml(name.trim())} at ${escapeHtml(email.trim())}.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (data.error) {
      console.error("Resend API error:", data.error);
      return NextResponse.json(
        { error: "Failed to dispatch email", details: data.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (error: any) {
    console.error("Contact API internal error:", error);
    return NextResponse.json(
      { error: "Internal server error", message: error.message },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
