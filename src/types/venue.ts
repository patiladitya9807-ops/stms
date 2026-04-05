export type SportKind =
  | "football"
  | "cricket"
  | "badminton"
  | "basketball"
  | "tennis"
  | "swimming";

export type VenueSport = {
  sport: SportKind;
  pricePerHour: number;
};

export type Venue = {
  id: string;
  name: string;
  zone: string;
  address: string;
  lat: number;
  lng: number;
  sports: VenueSport[];
  rating: number;
  reviewCount: number;
  amenities: string[];
  images: string[];
  hours: string;
  description: string;
  distanceKm: number;
};
