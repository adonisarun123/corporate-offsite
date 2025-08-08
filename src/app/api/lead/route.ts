import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log("Lead received", body);
  // TODO: Integrate with CRM or send email
  return NextResponse.json({ success: true });
}

