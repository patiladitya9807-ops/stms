"use client";

import { useMemo, useState } from "react";
import { CheckCheck, CreditCard, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SlotCalendar } from "@/components/venue/slot-calendar";
import { sampleSlots } from "@/lib/mock-data";
import { queueAction } from "@/lib/offline-queue";
import { useBookingStore } from "@/store/booking-store";
import type { Venue } from "@/types/venue";
import { useToast } from "@/components/ui/toast";

type BookingWizardProps = {
  venue: Venue;
};

export function BookingWizard({ venue }: BookingWizardProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { pushToast } = useToast();

  const sport = useBookingStore((state) => state.sport);
  const date = useBookingStore((state) => state.date);
  const startTime = useBookingStore((state) => state.startTime);
  const durationHours = useBookingStore((state) => state.durationHours);
  const teamSize = useBookingStore((state) => state.teamSize);
  const setBookingField = useBookingStore((state) => state.setBookingField);

  const pricePerHour = useMemo(
    () => venue.sports.find((item) => item.sport === sport)?.pricePerHour ?? venue.sports[0].pricePerHour,
    [sport, venue.sports],
  );

  const totalPrice = pricePerHour * durationHours;

  const submitBooking = async () => {
    const payload = {
      venueId: venue.id,
      sport,
      date,
      startTime,
      durationHours,
      teamSize,
      totalPrice,
    };

    if (!navigator.onLine) {
      queueAction("/api/booking/create", payload);
      pushToast({
        title: "Offline mode",
        description: "Booking request queued and will sync automatically when online.",
        variant: "warning",
      });
      setStep(4);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/booking/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Booking failed");
      }

      pushToast({
        title: "Booking initiated",
        description: "Redirecting to payment simulation.",
        variant: "success",
      });

      setStep(4);
    } catch (error) {
      pushToast({
        title: "Booking failed",
        description: error instanceof Error ? error.message : "Please retry.",
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="overflow-hidden p-5">
      <div className="mb-4 flex gap-2">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`h-2 flex-1 rounded-full ${index <= step ? "bg-(--accent)" : "bg-(--surface-soft)"}`}
          />
        ))}
      </div>

      {step === 1 ? (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Step 1: Sport + Date</h3>
          <select
            value={sport}
            onChange={(event) => setBookingField("sport", event.target.value as typeof sport)}
            className="h-11 w-full rounded-xl border border-(--border) bg-(--surface) px-3"
          >
            {venue.sports.map((item) => (
              <option key={item.sport} value={item.sport}>
                {item.sport} - INR {item.pricePerHour}/hr
              </option>
            ))}
          </select>
          <input
            type="date"
            value={date}
            onChange={(event) => setBookingField("date", event.target.value)}
            className="h-11 w-full rounded-xl border border-(--border) bg-(--surface) px-3"
          />
          <Button onClick={() => setStep(2)} disabled={!date}>
            Continue
          </Button>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Step 2: Select Available Slot</h3>
          <SlotCalendar
            slots={sampleSlots}
            selectedTime={startTime}
            onSelect={(time) => setBookingField("startTime", time)}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="text-sm font-semibold">
              Duration (hours)
              <input
                type="number"
                min={1}
                max={4}
                value={durationHours}
                onChange={(event) => setBookingField("durationHours", Number(event.target.value))}
                className="mt-1 h-10 w-full rounded-xl border border-(--border) bg-(--surface) px-3"
              />
            </label>
            <label className="text-sm font-semibold">
              Team Size
              <input
                type="number"
                min={2}
                max={30}
                value={teamSize}
                onChange={(event) => setBookingField("teamSize", Number(event.target.value))}
                className="mt-1 h-10 w-full rounded-xl border border-(--border) bg-(--surface) px-3"
              />
            </label>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button onClick={() => setStep(3)} disabled={!startTime}>
              Continue
            </Button>
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Step 3: Summary + Payment</h3>
          <div className="rounded-2xl border border-(--border) bg-(--surface-soft) p-4 text-sm text-(--text-muted)">
            <p>
              <span className="font-semibold text-(--text)">Venue:</span> {venue.name}
            </p>
            <p>
              <span className="font-semibold text-(--text)">Sport:</span> {sport}
            </p>
            <p>
              <span className="font-semibold text-(--text)">Date:</span> {date}
            </p>
            <p>
              <span className="font-semibold text-(--text)">Time:</span> {startTime}
            </p>
            <p>
              <span className="font-semibold text-(--text)">Duration:</span> {durationHours} hours
            </p>
            <p>
              <span className="font-semibold text-(--text)">Total:</span> INR {totalPrice}
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => setStep(2)}>
              Back
            </Button>
            <Button onClick={submitBooking} disabled={loading}>
              {loading ? <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> : <CreditCard className="mr-2 h-4 w-4" />}
              Proceed to Payment
            </Button>
          </div>
        </div>
      ) : null}

      {step === 4 ? (
        <div className="space-y-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
            <CheckCheck className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold">Booking Confirmed</h3>
          <p className="text-sm text-(--text-muted)">
            Confirmation email and SMS were queued. Booking ID: SPT-{Date.now().toString().slice(-8)}
          </p>
          <Button onClick={() => setStep(1)}>Book Another Slot</Button>
        </div>
      ) : null}
    </Card>
  );
}
