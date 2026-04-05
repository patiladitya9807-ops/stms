import { NextResponse } from "next/server";
import { sampleSlots, venues } from "@/lib/mock-data";

export async function POST(request: Request) {
  const payload = (await request.json()) as {
    venueId?: string;
    sport?: string;
    date?: string;
    startTime?: string;
    durationHours?: number;
    teamSize?: number;
    totalPrice?: number;
  };

  if (!payload.venueId || !payload.sport || !payload.date || !payload.startTime) {
    return new NextResponse("Missing required booking fields", { status: 400 });
  }

  const venue = venues.find((item) => item.id === payload.venueId);
  if (!venue) {
    return new NextResponse("Venue not found", { status: 404 });
  }

  const slot = sampleSlots.find((item) => item.time === payload.startTime);
  if (!slot || slot.status !== "available") {
    return new NextResponse("Selected slot is not available", { status: 409 });
  }

  return NextResponse.json({
    bookingId: `SPT-${Date.now()}`,
    status: "pending",
    message: "Booking initiated. Awaiting payment confirmation.",
    summary: {
      venue: venue.name,
      sport: payload.sport,
      date: payload.date,
      startTime: payload.startTime,
      durationHours: payload.durationHours ?? 1,
      teamSize: payload.teamSize ?? 10,
      totalPrice: payload.totalPrice ?? 0,
    },
  });
}
