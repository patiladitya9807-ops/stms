import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = (await request.json()) as { bookingId?: string; paymentId?: string };

  if (!payload.bookingId || !payload.paymentId) {
    return new NextResponse("Missing bookingId or paymentId", { status: 400 });
  }

  return NextResponse.json({
    bookingId: payload.bookingId,
    status: "confirmed",
    paymentId: payload.paymentId,
  });
}
