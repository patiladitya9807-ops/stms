import { create } from "zustand";
import type { SportKind } from "@/types/venue";

type BookingState = {
  venueId: string;
  sport: SportKind | "football";
  date: string;
  startTime: string;
  durationHours: number;
  teamSize: number;
  totalPrice: number;
  setBookingField: <K extends keyof BookingState>(key: K, value: BookingState[K]) => void;
  reset: () => void;
};

const initialState = {
  venueId: "",
  sport: "football" as const,
  date: "",
  startTime: "",
  durationHours: 1,
  teamSize: 10,
  totalPrice: 0,
};

export const useBookingStore = create<BookingState>((set) => ({
  ...initialState,
  setBookingField: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
  reset: () => set(initialState),
}));
