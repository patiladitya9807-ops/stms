import Link from "next/link";
import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Tournament } from "@/types/tournament";

type TournamentCardProps = {
  tournament: Tournament;
};

export function TournamentCard({ tournament }: TournamentCardProps) {
  return (
    <Card className="sport-card p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-(--accent)">{tournament.format}</p>
      <h3 className="mt-1 text-xl font-bold text-(--text)">{tournament.name}</h3>
      <p className="mt-2 text-sm text-(--text-muted)">
        {tournament.location} • {tournament.sport} • {tournament.registeredTeams.length}/{tournament.maxTeams} teams
      </p>
      <p className="mt-1 text-sm text-(--text-muted)">Entry fee: INR {tournament.entryFee}</p>
      <div className="mt-4 flex items-center justify-between">
        <p className="inline-flex items-center gap-1 text-sm font-semibold text-(--text)">
          <Trophy className="h-4 w-4 text-amber-500" />
          Prize: INR {tournament.prizePool}
        </p>
        <Link href={`/tournaments/${tournament.id}`}>
          <Button size="sm">Open</Button>
        </Link>
      </div>
    </Card>
  );
}
