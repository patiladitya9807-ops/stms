import { NextResponse } from "next/server";
import { generateFixtures } from "@/lib/fixtures";
import type { TournamentFormat } from "@/types/tournament";

export async function POST(request: Request) {
  const payload = (await request.json()) as {
    teams?: string[];
    format?: TournamentFormat;
  };

  const teams = payload.teams?.filter(Boolean) ?? [];
  const format = payload.format ?? "round-robin";

  if (teams.length < 2) {
    return new NextResponse("At least 2 teams required", { status: 400 });
  }

  const fixtures = generateFixtures(teams, format);
  return NextResponse.json({ fixtures });
}
