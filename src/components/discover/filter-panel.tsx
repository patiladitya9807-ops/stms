"use client";

import type { SportKind } from "@/types/venue";
import { useFilterStore } from "@/store/filter-store";

const sports: Array<SportKind | "all"> = [
  "all",
  "football",
  "cricket",
  "badminton",
  "basketball",
  "tennis",
  "swimming",
];

export function FilterPanel() {
  const sport = useFilterStore((state) => state.sport);
  const maxPrice = useFilterStore((state) => state.maxPrice);
  const minRating = useFilterStore((state) => state.minRating);
  const setSport = useFilterStore((state) => state.setSport);
  const setMaxPrice = useFilterStore((state) => state.setMaxPrice);
  const setMinRating = useFilterStore((state) => state.setMinRating);

  return (
    <section className="grid gap-4 rounded-3xl border border-(--border) bg-(--surface) p-4 md:grid-cols-3">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-(--text-muted)">Sport</p>
        <div className="flex flex-wrap gap-2">
          {sports.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setSport(item)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                sport === item
                  ? "bg-(--accent-soft) text-(--accent)"
                  : "bg-(--surface-soft) text-(--text-muted)"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-(--text-muted)">Max Price / hr</p>
        <input
          type="range"
          min={200}
          max={2000}
          step={50}
          value={maxPrice}
          onChange={(event) => setMaxPrice(Number(event.target.value))}
          className="w-full accent-(--accent)"
        />
        <p className="mt-1 text-sm font-semibold text-(--text)">INR {maxPrice}</p>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-(--text-muted)">Min Rating</p>
        <input
          type="range"
          min={0}
          max={5}
          step={0.1}
          value={minRating}
          onChange={(event) => setMinRating(Number(event.target.value))}
          className="w-full accent-(--accent)"
        />
        <p className="mt-1 text-sm font-semibold text-(--text)">{minRating.toFixed(1)}+</p>
      </div>
    </section>
  );
}
