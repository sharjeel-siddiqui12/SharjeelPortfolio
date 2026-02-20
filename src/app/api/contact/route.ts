import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const smtpEmail = process.env.SMTP_EMAIL!;
    const smtpPassword = process.env.SMTP_PASSWORD!;
    const receiverEmail = process.env.RECEIVER_EMAIL!;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpEmail,
        pass: smtpPassword,
      },
    });

    // 1. Email to you (the portfolio owner) — notification of new message
    await transporter.sendMail({
      from: `"${name} via Portfolio" <${smtpEmail}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `${name} (${email}) — ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #3b82f6, #06b6d4); padding: 32px 24px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 24px;">New Contact Message</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">from your portfolio website</p>
          </div>
          <div style="padding: 32px 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; width: 100px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px; font-weight: 600;">
                  <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Subject</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px; font-weight: 600;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #64748b; font-size: 13px; margin: 0 0 8px;">Message</p>
              <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; color: #334155; font-size: 14px; line-height: 1.6;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
          </div>
          <div style="padding: 16px 24px; background: #f1f5f9; text-align: center;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
    });

    // 2. Confirmation email to the sender
    await transporter.sendMail({
      from: `"Sharjeel Siddiqui" <${smtpEmail}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #3b82f6, #06b6d4); padding: 32px 24px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 24px;">Message Received!</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">Thank you for contacting me</p>
          </div>
          <div style="padding: 32px 24px;">
            <p style="color: #334155; font-size: 15px; line-height: 1.7; margin: 0 0 16px;">
              Hi <strong>${name}</strong>,
            </p>
            <p style="color: #334155; font-size: 15px; line-height: 1.7; margin: 0 0 16px;">
              Thank you for reaching out! I've received your message and will get back to you as soon as possible — typically within 24-48 hours.
            </p>
            <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 24px 0;">
              <p style="color: #64748b; font-size: 13px; margin: 0 0 8px;">Here's a copy of your message:</p>
              <p style="color: #64748b; font-size: 13px; margin: 0 0 4px;"><strong>Subject:</strong> ${subject}</p>
              <div style="color: #475569; font-size: 14px; line-height: 1.6; margin-top: 8px; padding-top: 8px; border-top: 1px solid #e2e8f0;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            <p style="color: #334155; font-size: 15px; line-height: 1.7; margin: 0;">
              Best regards,<br>
              <strong>Sharjeel Siddiqui</strong><br>
              <span style="color: #64748b; font-size: 13px;">MERN Stack Developer</span>
            </p>
          </div>
          <div style="padding: 16px 24px; background: #f1f5f9; text-align: center;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">This is an automated confirmation from sharjeelsiddiqui.info</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
