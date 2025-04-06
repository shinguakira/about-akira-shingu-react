import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, recipientEmail } = body;
    
    if (!name || !email || !message || !recipientEmail) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    console.log("Message received:");
    console.log(`From: ${name} (${email})`);
    console.log(`To: ${recipientEmail}`);
    console.log(`Message: ${message}`);
    
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
