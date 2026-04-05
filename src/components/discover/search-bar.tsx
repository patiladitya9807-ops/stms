"use client";

import { Search } from "lucide-react";
import { useFilterStore } from "@/store/filter-store";

export function SearchBar() {
  const query = useFilterStore((state) => state.query);
  const setQuery = useFilterStore((state) => state.setQuery);

  return (
    <label className="flex h-12 items-center gap-3 rounded-2xl border border-(--border) bg-(--surface) px-4">
      <Search className="h-4 w-4 text-(--text-muted)" />
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search venue, area, or amenity"
        className="w-full bg-transparent text-sm outline-none placeholder:text-(--text-muted)"
      />
    </label>
  );
}
