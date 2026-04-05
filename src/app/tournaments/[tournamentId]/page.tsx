import { notFound } from "next/navigation";
import { BracketView } from "@/components/tournament/bracket-view";
import { StandingsTable } from "@/components/tournament/standings-table";
import { Card } from "@/components/ui/card";
import { tournaments } from "@/lib/mock-data";

type TournamentDetailPageProps = {
  params: Promise<{ tournamentId: string }>;
};

export default async function TournamentDetailPage({ params }: TournamentDetailPageProps) {
  const { tournamentId } = await params;
  const tournament = tournaments.find((item) => item.id === tournamentId);

  if (!tournament) {
    notFound();
  }

  const standings = tournament.registeredTeams.slice(0, 6).map((team, index) => ({
    team,
    played: 5,
    won: Math.max(0, 4 - index % 4),
    lost: index % 3,
    points: Math.max(3, 12 - index * 2),
  }));

  return (
    <div className="space-y-5">
      <Card className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">{tournament.format}</p>
        <h1 className="mt-1 text-3xl font-black">{tournament.name}</h1>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          {tournament.location} • {tournament.sport} • Prize Pool INR {tournament.prizePool}
        </p>
      </Card>

      <BracketView fixtures={tournament.fixtures.slice(0, 8)} />
      <StandingsTable standings={standings} />
    </div>
  );
}
