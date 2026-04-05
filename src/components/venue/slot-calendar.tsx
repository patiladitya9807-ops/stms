"use client";

import type { BookingSlot } from "@/types/booking";
import { cn } from "@/lib/utils";

type SlotCalendarProps = {
  slots: BookingSlot[];
  selectedTime: string;
  onSelect: (time: string) => void;
};

export function SlotCalendar({ slots, selectedTime, onSelect }: SlotCalendarProps) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
      {slots.map((slot) => (
        <button
          key={slot.time}
          type="button"
          disabled={slot.status !== "available"}
          onClick={() => onSelect(slot.time)}
          className={cn(
            "slot-chip rounded-xl border px-3 py-2 text-sm font-semibold",
            slot.status === "booked" && "cursor-not-allowed border-transparent bg-red-500/20 text-red-300",
            slot.status === "pending" && "cursor-not-allowed border-transparent bg-amber-400/20 text-amber-200",
            slot.status === "available" && "border-emerald-400/35 bg-emerald-400/15 text-emerald-200 hover:brightness-110",
            selectedTime === slot.time && "ring-2 ring-[var(--accent)]",
          )}
        >
          {slot.time}
        </button>
      ))}
    </div>
  );
}
