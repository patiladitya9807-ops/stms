"use client";

import { SearchBar } from "@/components/discover/search-bar";
import { FilterPanel } from "@/components/discover/filter-panel";
import { LocationSelector } from "@/components/discover/location-selector";
import { VenueCard } from "@/components/discover/venue-card";
import { VenueMap } from "@/components/discover/venue-map";
import { Skeleton } from "@/components/ui/skeleton";
import { useVenues } from "@/hooks/use-venues";
import { useFilterStore } from "@/store/filter-store";

export default function DiscoverPage() {
  const zone = useFilterStore((state) => state.zone);
  const sport = useFilterStore((state) => state.sport);
  const query = useFilterStore((state) => state.query);
  const maxPrice = useFilterStore((state) => state.maxPrice);
  const minRating = useFilterStore((state) => state.minRating);

  const { data: venues = [], isLoading, isError } = useVenues({ zone, sport, query, maxPrice, minRating });

  return (
    <div className="space-y-5">
      <section>
        <h1 className="text-3xl font-black">Discover Venues</h1>
        <p className="mt-1 text-sm text-(--text-muted)">
          Browse by location zones, compare prices, and lock your preferred slot.
        </p>
      </section>

      <SearchBar />
      <LocationSelector />
      <FilterPanel />

      <section className="grid gap-6 xl:grid-cols-[1.25fr_0.95fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={`venue-skeleton-${index}`} className="h-[220px] rounded-3xl" />
              ))
            : null}

          {isError ? (
            <div className="rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
              Unable to load venues right now. Retry in a moment.
            </div>
          ) : null}

          {!isLoading && venues.length === 0 ? (
            <div className="rounded-2xl border border-(--border) bg-(--surface) p-6 text-sm text-(--text-muted)">
              No venues matched your filters. Try broadening price or sport filters.
            </div>
          ) : null}

          {venues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>

        <div>
          <VenueMap venues={venues} />
        </div>
      </section>
    </div>
  );
}
