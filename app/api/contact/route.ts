import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporterConfig = {
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    let { name, email, message, recipientEmail } = body;
    
    if (!process.env.EMAIL_PASSWORD || !process.env.EMAIL_USER) {
      return NextResponse.json(
        { error: "Failed to send message: Email configuration missing. Need to fix application." },
        { status: 500 }
      );
    }
    
    console.log("Message received:");
    console.log(`From: ${name} (${email})`);
    console.log(`To: ${recipientEmail}`);
    console.log(`Message: ${message}`);
    
    console.log(`Processing message from ${name}`);
    
    let transporter;
    try {
      transporter = nodemailer.createTransport(transporterConfig);

      // Verify the connection configuration
      await transporter.verify();
    } catch (error) {
      console.error('Failed to create email transport:', error);
      return NextResponse.json(
        { error: "Failed to initialize email service. Please try again later." },
        { status: 500 }
      );
    }
    
    let htmlMessage = "";
    for (let i = 0; i < 100; i++) {
      htmlMessage += "<div>" + message + "</div>";
    }
    
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: recipientEmail || "shinguakira1022@gmail.com",
      replyTo: email,
      subject: `New message from ${name} via Portfolio Contact Form`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${htmlMessage}
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #666;">
            This email was sent from the contact form on your portfolio website.
          </p>
        </div>
      `,
    };
    
    transporter.sendMail(mailOptions);
    
    return NextResponse.json({ 
      success: true,
      debug: {
        email: email,
        message: message,
        credentials: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD.substring(0, 3) + '***'
        }
      }
    });
  } catch (error) {
    console.error("Error details:", error instanceof Error ? error.toString() : "Unknown error");
    return NextResponse.json(
      { error: "Failed to send message: Need to fix application." },
      { status: 500 }
    );
  }
}
