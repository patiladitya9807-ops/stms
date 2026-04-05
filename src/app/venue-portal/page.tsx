import { BarChart3, CalendarRange, MessageSquareText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { venues } from "@/lib/mock-data";

export default function VenuePortalPage() {
  const venue = venues[0];

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-black">Venue Owner Portal</h1>

      <section className="grid gap-4 md:grid-cols-3">
        <Card className="p-4">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-(--text-muted)">
            <BarChart3 className="h-4 w-4 text-(--accent)" />
            Monthly Revenue
          </p>
          <p className="mt-2 text-3xl font-black">INR 124,500</p>
        </Card>

        <Card className="p-4">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-(--text-muted)">
            <CalendarRange className="h-4 w-4 text-(--accent)" />
            Total Bookings
          </p>
          <p className="mt-2 text-3xl font-black">87</p>
        </Card>

        <Card className="p-4">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-(--text-muted)">
            <MessageSquareText className="h-4 w-4 text-(--accent)" />
            New Reviews
          </p>
          <p className="mt-2 text-3xl font-black">18</p>
        </Card>
      </section>

      <Card className="p-5">
        <h2 className="text-xl font-bold">Availability + Listing</h2>
        <p className="mt-1 text-sm text-(--text-muted)">{venue.name}</p>
        <div className="mt-3 rounded-2xl border border-(--border) bg-(--surface-soft) p-3 text-sm text-(--text-muted)">
          <p>Operating Hours: {venue.hours}</p>
          <p>Amenities: {venue.amenities.join(", ")}</p>
          <p>Peak Time: Weekdays 18:00 - 21:00</p>
          <p>Cancellation Rate: 4.6%</p>
        </div>
      </Card>
    </div>
  );
}
