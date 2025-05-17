import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const formData = await req.json();
    const { name, email, phone, subject, message } = formData;

    console.log("Received contact form data:", formData);

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }
    
    // Check for environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error("Missing email configuration. Please check environment variables.");
      return NextResponse.json(
        { error: 'Email configuration missing. Please contact administrator.' },
        { status: 500 }
      );
    }

    // Configure email transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Test email connection before sending
    try {
      await transporter.verify();
      console.log("Email connection verified");
    } catch (verifyError) {
      console.error("Email verification failed:", verifyError);
      return NextResponse.json(
        { error: 'Email configuration error. Please contact administrator.' },
        { status: 500 }
      );
    }

    // 1. ADMIN NOTIFICATION EMAIL
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
      replyTo: email,
      subject: `Contact Form: ${subject || 'New Message'}`,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 5px;">
  <div style="background-color: #FF6B00; padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Message</h1>
  </div>
  
  <div style="padding: 25px;">
    <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #FF6B00; margin-bottom: 25px;">
      <p style="margin: 0; color: #333; font-weight: bold;">${subject || 'General Inquiry'}</p>
      <p style="margin: 5px 0 0; color: #666; font-size: 14px;">Received on ${new Date().toLocaleDateString()}</p>
    </div>
    
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; width: 30%; font-weight: bold; color: #333;">From:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Email Address:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;"><a href="mailto:${email}" style="color: #FF6B00;">${email}</a></td>
      </tr>
      ${phone ? `
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Phone Number:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${phone}</td>
      </tr>
      ` : ''}
    </table>
    
    <div style="margin-bottom: 25px;">
      <h3 style="color: #333; border-bottom: 2px solid #FF6B00; padding-bottom: 8px; display: inline-block;">Message</h3>
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; color: #333; line-height: 1.5;">
        ${message.replace(/\n/g, '<br>')}
      </div>
    </div>
  </div>
  
  <div style="background-color: #333; padding: 15px; text-align: center; color: #fff; font-size: 12px;">
    <p style="margin: 0;">© ${new Date().getFullYear()} Technologistics. All Rights Reserved.</p>
  </div>
</div>`
    };

    // 2. CLIENT CONFIRMATION EMAIL
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `We've Received Your Message - Technologistics`,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 5px;">
  <div style="background-color: #FF6B00; padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Contacting Us</h1>
  </div>
  
  <div style="padding: 25px;">
    <p style="font-size: 16px; color: #333; margin-top: 0;">Hello ${name},</p>
    
    <p style="font-size: 16px; color: #333;">Thank you for reaching out to us. We've received your message and appreciate your interest in Technologistics.</p>
    
    <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #FF6B00; margin: 25px 0;">
      <p style="margin: 0 0 10px 0; font-weight: bold; color: #333;">Your Message Details:</p>
      <ul style="margin: 0; padding: 0 0 0 20px; color: #333;">
        <li style="margin-bottom: 5px;">Subject: ${subject || 'General Inquiry'}</li>
        <li style="margin-bottom: 0;">Submitted on: ${new Date().toLocaleDateString()}</li>
      </ul>
    </div>
    
    <p style="font-size: 16px; color: #333;">What to expect:</p>
    
    <ul style="margin: 15px 0; padding: 0 0 0 20px; color: #333;">
      <li style="margin-bottom: 10px;">A member of our team will review your message.</li>
      <li style="margin-bottom: 10px;">We aim to respond to all inquiries within 1-2 business days.</li>
      <li style="margin-bottom: 0;">For urgent matters, please call us directly at <a href="tel:+1234567890" style="color: #FF6B00; text-decoration: none;">+1 (234) 567-890</a>.</li>
    </ul>
    
    <p style="font-size: 16px; color: #333;">In the meantime, you might find answers to common questions on our <a href="https://yourwebsite.com/faq" style="color: #FF6B00; text-decoration: none;">FAQ page</a>.</p>
    
    <div style="margin-top: 30px;">
      <p style="margin: 0; color: #333; font-weight: bold;">Best Regards,</p>
      <p style="margin: 5px 0 0; color: #333;">The Technologistics Team</p>
    </div>
  </div>
  
  <div style="background-color: #333; padding: 15px; text-align: center;">
    <p style="margin: 0 0 10px 0; color: #fff; font-size: 14px;">Technologistics</p>
    <div style="margin: 0 0 15px 0;">
      <a href="https://yourwebsite.com" style="color: #FF6B00; text-decoration: none; margin: 0 10px; font-size: 12px;">Website</a> |
      <a href="mailto:support@technologistics.io" style="color: #FF6B00; text-decoration: none; margin: 0 10px; font-size: 12px;">Email</a> |
      <a href="https://yourwebsite.com/blog" style="color: #FF6B00; text-decoration: none; margin: 0 10px; font-size: 12px;">Blog</a>
    </div>
    <p style="margin: 0; color: #999; font-size: 12px;">© ${new Date().getFullYear()} Technologistics. All Rights Reserved.</p>
  </div>
</div>`
    };

    // Send both emails
    try {
      // Send admin notification
      await transporter.sendMail(adminMailOptions);
      console.log("Admin notification email sent successfully");
      
      // Send client confirmation
      await transporter.sendMail(clientMailOptions);
      console.log("Client confirmation email sent successfully");
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send message' },
      { status: 500 }
    );
  }
}