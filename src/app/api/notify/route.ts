import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = (await request.json()) as {
    channel?: "email" | "sms" | "push";
    recipient?: string;
    message?: string;
  };

  if (!payload.channel || !payload.recipient || !payload.message) {
    return new NextResponse("Missing notification payload", { status: 400 });
  }

  return NextResponse.json({
    accepted: true,
    channel: payload.channel,
    recipient: payload.recipient,
  });
}
