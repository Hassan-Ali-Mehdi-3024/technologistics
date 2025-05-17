import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const formData = await req.json();
    const { 
      fullName: name, 
      email, 
      phone, 
      company, 
      service, 
      projectDescription, 
      contactMethod 
    } = formData;

    console.log("Received form data:", formData);

    // Basic validation
    if (!name || !email || !projectDescription) {
      return NextResponse.json(
        { error: 'Name, email and project description are required' },
        { status: 400 }
      );
    }

    // Get service label
    const services: Record<string, string> = {
      "ai-agents": "AI Agents Development",
      "web-development": "Web Development",
      "mobile-app": "Mobile App Development",
      "ml-data-science": "ML/Data Science",
      "custom-solution": "Custom Solution"
    };
    
    const serviceLabel = services[service] || service;
    
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
      subject: `Service Booking: ${serviceLabel}`,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 5px;">
  <div style="background-color: #FF6B00; padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px;">New Service Booking Request</h1>
  </div>
  
  <div style="padding: 25px;">
    <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #FF6B00; margin-bottom: 25px;">
      <table style="width: 100%; border-collapse: collapse; margin: 0;">
        <tr>
          <td style="font-weight: bold; padding: 0; color: #333;">Service:</td>
          <td style="padding: 0 0 0 10px; color: #333;">${serviceLabel}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 5px 0 0 0; color: #333;">Submitted:</td>
          <td style="padding: 5px 0 0 10px; color: #666; font-size: 14px;">${new Date().toLocaleDateString()}</td>
        </tr>
      </table>
    </div>
    
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; width: 30%; font-weight: bold; color: #333;">Client Name:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Email Address:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;"><a href="mailto:${email}" style="color: #FF6B00;">${email}</a></td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Company/Startup:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${company || "Not provided"}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Phone Number:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${phone || "Not provided"}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Preferred Contact:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;"><strong style="color: #FF6B00;">${contactMethod.toUpperCase()}</strong></td>
      </tr>
    </table>
    
    <div style="margin-bottom: 25px;">
      <h3 style="color: #333; border-bottom: 2px solid #FF6B00; padding-bottom: 8px; display: inline-block;">Project Description</h3>
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; color: #333; line-height: 1.5;">
        ${projectDescription.replace(/\n/g, '<br>')}
      </div>
    </div>
    
    <div style="background-color: #f2f8ff; border-left: 4px solid #0066cc; padding: 15px; margin-top: 20px;">
      <p style="margin: 0; color: #0066cc; font-weight: bold;">Action Required</p>
      <p style="margin: 10px 0 0; color: #333;">Please review this service request and schedule a follow-up with the client within 24 hours.</p>
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
      subject: `Your Service Request Received - ${serviceLabel}`,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 5px;">
  <div style="background-color: #FF6B00; padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Your Request</h1>
  </div>
  
  <div style="padding: 25px;">
    <p style="font-size: 16px; color: #333; margin-top: 0;">Hello ${name},</p>
    
    <p style="font-size: 16px; color: #333;">Thank you for your interest in our <strong>${serviceLabel}</strong> services. We have received your request and a member of our team will review the details shortly.</p>
    
    <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #FF6B00; margin: 25px 0;">
      <p style="margin: 0 0 10px 0; font-weight: bold; color: #333;">Your Request Summary:</p>
      <ul style="margin: 0; padding: 0 0 0 20px; color: #333;">
        <li style="margin-bottom: 5px;">Service: ${serviceLabel}</li>
        <li style="margin-bottom: 5px;">Submitted on: ${new Date().toLocaleDateString()}</li>
        <li style="margin-bottom: 0;">Preferred contact method: ${contactMethod.toUpperCase()}</li>
      </ul>
    </div>
    
    <p style="font-size: 16px; color: #333;">What happens next?</p>
    
    <ol style="margin: 15px 0; padding: 0 0 0 20px; color: #333;">
      <li style="margin-bottom: 10px;">Our team will review your project details within 24 hours.</li>
      <li style="margin-bottom: 10px;">We will contact you via your preferred method (${contactMethod}) to discuss your needs in more detail.</li>
      <li style="margin-bottom: 0;">We'll provide a tailored proposal based on your specific project requirements.</li>
    </ol>
    
    <p style="font-size: 16px; color: #333;">If you have any immediate questions or would like to provide additional information, please feel free to reply to this email.</p>
    
    <p style="font-size: 16px; color: #333; margin-bottom: 0;">We look forward to working with you!</p>
    
    <div style="margin-top: 30px;">
      <p style="margin: 0; color: #333; font-weight: bold;">Best Regards,</p>
      <p style="margin: 5px 0 0; color: #333;">The Technologistics Team</p>
    </div>
  </div>
  
  <div style="background-color: #333; padding: 15px; text-align: center;">
    <p style="margin: 0 0 10px 0; color: #fff; font-size: 14px;">Technologistics</p>
    <div style="margin: 0 0 15px 0;">
      <a href="https://yourwebsite.com" style="color: #FF6B00; text-decoration: none; margin: 0 10px; font-size: 12px;">Website</a> |
      <a href="mailto:support@technologistics.io" style="color: #FF6B00; text-decoration: none; margin: 0 10px; font-size: 12px;">Email</a>
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
    console.error('Service booking form error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send booking request' },
      { status: 500 }
    );
  }
}