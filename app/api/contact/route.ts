import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporterConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  debug: true, // Enable debug logging
  logger: true, // Log to console
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, recipientEmail } = body;

    if (!process.env.EMAIL_PASSWORD || !process.env.EMAIL_USER) {
      return NextResponse.json(
        {
          error:
            "Failed to send message: Email configuration missing. Need to fix application.",
        },
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

      console.log("Attempting to verify transport...");
      await transporter.verify();
      console.log("Transport verified successfully");
    } catch (error) {
      console.error("Failed to create email transport:", error);
      return NextResponse.json(
        {
          error: "Failed to initialize email service. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Split message by newlines and create div for each line
    const htmlMessage = message
      .split("\n")
      .map((line: string) => `<div>${line}</div>`)
      .join("");

    const mailOptions = {
      from: `"Akira Shingu PortfolioContact Form" <${process.env.EMAIL_USER}>`,
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

    try {
      console.log("Attempting to send email...");
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info);

      return NextResponse.json({
        success: true,
        messageId: info.messageId,
        debug: {
          email: email,
          message: message,
          credentials: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD.substring(0, 3) + "***",
          },
        },
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(
      "Error details:",
      error instanceof Error ? error.toString() : "Unknown error"
    );
    return NextResponse.json(
      { error: "Failed to send message: Need to fix application." },
      { status: 500 }
    );
  }
}
