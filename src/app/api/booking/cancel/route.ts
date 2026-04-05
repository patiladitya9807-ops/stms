import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = (await request.json()) as { bookingId?: string; reason?: string };

  if (!payload.bookingId) {
    return new NextResponse("Missing bookingId", { status: 400 });
  }

  return NextResponse.json({
    bookingId: payload.bookingId,
    status: "cancelled",
    refund: "partial",
    reason: payload.reason ?? "user-request",
  });
}
