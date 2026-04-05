import type { SportKind } from "@/types/venue";

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  location: string;
  preferredSports: SportKind[];
  skillLevel: "beginner" | "intermediate" | "advanced";
  stats: {
    hoursPlayed: number;
    courtsVisited: number;
    tournamentsWon: number;
  };
};
