"use client";

import { zones } from "@/lib/mock-data";
import { useFilterStore } from "@/store/filter-store";
import { cn } from "@/lib/utils";

export function LocationSelector() {
  const zone = useFilterStore((state) => state.zone);
  const setZone = useFilterStore((state) => state.setZone);

  return (
    <div className="flex flex-wrap gap-2">
      {["All", ...zones].map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setZone(item)}
          className={cn(
            "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition",
            zone === item
              ? "border-transparent bg-(--accent) text-(--accent-contrast)"
              : "border-(--border) bg-(--surface) text-(--text-muted) hover:text-(--text)",
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
