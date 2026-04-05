import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = (await request.json()) as {
    fixtureId?: string;
    scoreA?: number;
    scoreB?: number;
  };

  if (!payload.fixtureId || typeof payload.scoreA !== "number" || typeof payload.scoreB !== "number") {
    return new NextResponse("Invalid score payload", { status: 400 });
  }

  return NextResponse.json({
    fixtureId: payload.fixtureId,
    scoreA: payload.scoreA,
    scoreB: payload.scoreB,
    winner:
      payload.scoreA === payload.scoreB ? "draw" : payload.scoreA > payload.scoreB ? "teamA" : "teamB",
  });
}
