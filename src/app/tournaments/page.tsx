import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TournamentCard } from "@/components/tournament/tournament-card";
import { tournaments } from "@/lib/mock-data";

export default function TournamentsPage() {
  return (
    <div className="space-y-5">
      <section className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-3xl font-black">Tournament Hub</h1>
          <p className="mt-1 text-sm text-(--text-muted)">
            Browse city tournaments, track brackets, and manage match progress.
          </p>
        </div>
        <Link href="/tournaments/create">
          <Button>Create Tournament</Button>
        </Link>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {tournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </section>
    </div>
  );
}
