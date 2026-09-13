import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY environment variable is not configured.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { name, email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required fields.' },
        { status: 400 }
      );
    }

    const senderName = name || 'Anonymous Visitor';

    const data = await resend.emails.send({
      from: 'HireDavid Portfolio <onboarding@resend.dev>',
      to: ['sawedavid7@gmail.com'],
      replyTo: email,
      subject: `New Inquiry on HireDavid from ${senderName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e7e1d4; borderRadius: 8px; background-color: #faf7f2;">
          <h2 style="color: #1c1917; margin-bottom: 16px;">New Contact Message from HireDavid Website</h2>
          <p style="font-size: 14px; color: #444; margin-bottom: 8px;"><strong>From:</strong> ${senderName} (&lt;${email}&gt;)</p>
          <p style="font-size: 14px; color: #444; margin-bottom: 16px;"><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          <div style="padding: 16px; background-color: #ffffff; border: 1px solid #e0d6c5; border-radius: 6px; font-size: 15px; color: #1c1917; white-space: pre-wrap;">
            ${message}
          </div>
          <hr style="margin-top: 24px; border: none; border-top: 1px solid #e0d6c5;" />
          <p style="font-size: 12px; color: #777; margin-top: 12px;">This email was automatically forwarded by Resend from your website contact form.</p>
        </div>
      `,
      text: `New Inquiry on HireDavid\nFrom: ${senderName} (${email})\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Failed to send email';
    console.error('Error sending email via Resend:', error);
    return NextResponse.json(
      { error: errMessage },
      { status: 500 }
    );
  }
}
