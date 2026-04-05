import { Check } from "lucide-react";

type AmenitiesListProps = {
  amenities: string[];
};

export function AmenitiesList({ amenities }: AmenitiesListProps) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {amenities.map((amenity) => (
        <li
          key={amenity}
          className="flex items-center gap-2 rounded-xl border border-(--border) bg-(--surface-soft) px-3 py-2 text-sm text-(--text-muted)"
        >
          <Check className="h-4 w-4 text-(--accent)" />
          {amenity}
        </li>
      ))}
    </ul>
  );
}
