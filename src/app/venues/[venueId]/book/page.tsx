import { notFound } from "next/navigation";
import { BookingWizard } from "@/components/venue/booking-wizard";
import { venues } from "@/lib/mock-data";

type BookVenuePageProps = {
  params: Promise<{ venueId: string }>;
};

export default async function BookVenuePage({ params }: BookVenuePageProps) {
  const { venueId } = await params;
  const venue = venues.find((item) => item.id === venueId);

  if (!venue) {
    notFound();
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-black">Book {venue.name}</h1>
      <p className="text-sm text-[var(--text-muted)]">Choose sport, slot, and complete payment.</p>
      <BookingWizard venue={venue} />
    </div>
  );
}
