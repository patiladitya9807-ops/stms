import { create } from "zustand";
import type { SportKind } from "@/types/venue";

type FilterState = {
  zone: string;
  sport: SportKind | "all";
  maxPrice: number;
  query: string;
  minRating: number;
  setZone: (zone: string) => void;
  setSport: (sport: SportKind | "all") => void;
  setMaxPrice: (value: number) => void;
  setQuery: (value: string) => void;
  setMinRating: (value: number) => void;
  reset: () => void;
};

const initialState = {
  zone: "All",
  sport: "all" as const,
  maxPrice: 2000,
  query: "",
  minRating: 0,
};

export const useFilterStore = create<FilterState>((set) => ({
  ...initialState,
  setZone: (zone) => set({ zone }),
  setSport: (sport) => set({ sport }),
  setMaxPrice: (maxPrice) => set({ maxPrice }),
  setQuery: (query) => set({ query }),
  setMinRating: (minRating) => set({ minRating }),
  reset: () => set(initialState),
}));
