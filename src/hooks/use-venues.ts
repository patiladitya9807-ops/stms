"use client";

import { useQuery } from "@tanstack/react-query";
import { withRetry } from "@/lib/api";
import type { Venue } from "@/types/venue";

type UseVenuesFilters = {
  zone?: string;
  sport?: string;
  query?: string;
  maxPrice?: number;
  minRating?: number;
};

export function useVenues(filters: UseVenuesFilters) {
  return useQuery({
    queryKey: ["venues", filters],
    queryFn: async () =>
      withRetry(async () => {
        const params = new URLSearchParams();

        if (filters.zone && filters.zone !== "All") {
          params.set("zone", filters.zone);
        }
        if (filters.sport && filters.sport !== "all") {
          params.set("sport", filters.sport);
        }
        if (filters.query) {
          params.set("query", filters.query);
        }
        if (typeof filters.maxPrice === "number") {
          params.set("maxPrice", String(filters.maxPrice));
        }
        if (typeof filters.minRating === "number") {
          params.set("minRating", String(filters.minRating));
        }

        const response = await fetch(`/api/venues?${params.toString()}`);
        if (!response.ok) {
          throw new Error("Failed to fetch venues");
        }

        const data = (await response.json()) as { venues: Venue[] };
        return data.venues;
      }),
    staleTime: 60000,
  });
}
