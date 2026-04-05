import { NextResponse } from "next/server";
import { venues } from "@/lib/mock-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const zone = searchParams.get("zone");
  const sport = searchParams.get("sport");
  const query = searchParams.get("query")?.toLowerCase() ?? "";
  const maxPrice = Number(searchParams.get("maxPrice") ?? "2000");
  const minRating = Number(searchParams.get("minRating") ?? "0");

  const filtered = venues.filter((venue) => {
    const zoneMatch = !zone || zone === "All" || venue.zone === zone;
    const sportMatch = !sport || sport === "all" || venue.sports.some((item) => item.sport === sport);
    const queryMatch =
      query.length === 0 ||
      venue.name.toLowerCase().includes(query) ||
      venue.address.toLowerCase().includes(query) ||
      venue.amenities.some((amenity) => amenity.toLowerCase().includes(query));
    const priceMatch = venue.sports.some((item) => item.pricePerHour <= maxPrice);
    const ratingMatch = venue.rating >= minRating;

    return zoneMatch && sportMatch && queryMatch && priceMatch && ratingMatch;
  });

  return NextResponse.json({ venues: filtered });
}
