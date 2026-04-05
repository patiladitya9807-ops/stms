import { Card } from "@/components/ui/card";
import type { Venue } from "@/types/venue";

type VenueMapProps = {
  venues: Venue[];
};

export function VenueMap({ venues }: VenueMapProps) {
  return (
    <Card className="relative overflow-hidden p-5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,color-mix(in_oklab,var(--accent),transparent_78%),transparent_32%),radial-gradient(circle_at_80%_80%,color-mix(in_oklab,var(--accent-2),transparent_80%),transparent_36%)]" />
      <div className="relative">
        <h3 className="text-lg font-bold">Interactive Venue Map</h3>
        <p className="mt-1 text-sm text-(--text-muted)">
          Map integration is wired for Google Maps or Mapbox keys. Current view shows live pin coordinates.
        </p>

        <div className="mt-4 grid max-h-[360px] gap-2 overflow-auto rounded-2xl border border-(--border) bg-(--surface) p-3">
          {venues.map((venue) => (
            <div
              key={venue.id}
              className="flex items-center justify-between rounded-xl border border-(--border) bg-(--surface-soft) px-3 py-2 text-sm"
            >
              <p className="font-semibold text-(--text)">{venue.name}</p>
              <p className="font-mono text-xs text-(--text-muted)">
                {venue.lat.toFixed(4)}, {venue.lng.toFixed(4)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
