import type { SportKind } from "@/types/venue";

export type TournamentFormat =
  | "knockout"
  | "round-robin"
  | "double-elimination"
  | "league";

export type MatchFixture = {
  id: string;
  round: string;
  teamA: string;
  teamB: string;
  scoreA?: number;
  scoreB?: number;
  winner?: string;
  startsAt: string;
};

export type Tournament = {
  id: string;
  name: string;
  sport: SportKind;
  location: string;
  format: TournamentFormat;
  entryFee: number;
  maxTeams: number;
  registeredTeams: string[];
  startsAt: string;
  endsAt: string;
  venueId: string;
  prizePool: number;
  fixtures: MatchFixture[];
};
