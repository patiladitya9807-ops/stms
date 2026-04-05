import Link from "next/link";
import { notFound } from "next/navigation";
import { AmenitiesList } from "@/components/venue/amenities-list";
import { ReviewCard } from "@/components/venue/review-card";
import { ReviewForm } from "@/components/venue/review-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { venues } from "@/lib/mock-data";

type VenueDetailPageProps = {
  params: Promise<{ venueId: string }>;
};

export default async function VenueDetailPage({ params }: VenueDetailPageProps) {
  const { venueId } = await params;
  const venue = venues.find((item) => item.id === venueId);

  if (!venue) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black">{venue.name}</h1>
            <p className="mt-2 text-sm text-[var(--text-muted)]">{venue.address}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">Open: {venue.hours}</p>
          </div>
          <Link href={`/venues/${venue.id}/book`}>
            <Button>Book This Venue</Button>
          </Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {venue.sports.map((sportInfo) => (
            <Badge key={sportInfo.sport}>
              {sportInfo.sport} • INR {sportInfo.pricePerHour}
            </Badge>
          ))}
        </div>
      </section>

      <Card className="p-5">
        <h2 className="text-xl font-bold">Amenities</h2>
        <p className="mt-1 text-sm text-[var(--text-muted)]">Verified facility highlights from venue management.</p>
        <div className="mt-4">
          <AmenitiesList amenities={venue.amenities} />
        </div>
      </Card>

      <section className="grid gap-4 lg:grid-cols-2">
        <ReviewCard
          name="Rahul M."
          rating={4.8}
          review="Excellent floodlights and very responsive staff. Booking process was smooth and entry with QR was instant."
        />
        <ReviewCard
          name="Neha P."
          rating={4.6}
          review="Surface quality is great, parking was easy, and washrooms were clean. Weekend slots fill up quickly."
        />
      </section>

      <ReviewForm />
    </div>
  );
}
