import type { SportKind } from "@/types/venue";

export type SlotStatus = "available" | "booked" | "pending";

export type BookingSlot = {
  time: string;
  status: SlotStatus;
};

export type Booking = {
  id: string;
  venueId: string;
  venueName: string;
  sport: SportKind;
  date: string;
  startTime: string;
  durationHours: number;
  teamSize: number;
  totalPrice: number;
  status: "pending" | "confirmed" | "cancelled";
};
