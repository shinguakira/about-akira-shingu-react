import { NextResponse } from "next/server";
import { certifications } from "../../../constants/certification";

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: certifications,
    });
  } catch (error) {
    console.error("Error fetching certifications:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to fetch certifications" 
      },
      { status: 500 }
    );
  }
}
