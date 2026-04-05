import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { demoUser } from "@/lib/mock-data";

export default function ProfilePage() {
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-black">My Profile</h1>
      <Card className="p-6">
        <p className="text-2xl font-bold text-(--text)">{demoUser.name}</p>
        <p className="mt-1 text-sm text-(--text-muted)">{demoUser.email}</p>
        <p className="text-sm text-(--text-muted)">{demoUser.location}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {demoUser.preferredSports.map((sport) => (
            <Badge key={sport}>{sport}</Badge>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-(--border) bg-(--surface-soft) p-3 text-sm">
            <p className="text-(--text-muted)">Hours Played</p>
            <p className="text-xl font-bold">{demoUser.stats.hoursPlayed}</p>
          </div>
          <div className="rounded-xl border border-(--border) bg-(--surface-soft) p-3 text-sm">
            <p className="text-(--text-muted)">Courts Visited</p>
            <p className="text-xl font-bold">{demoUser.stats.courtsVisited}</p>
          </div>
          <div className="rounded-xl border border-(--border) bg-(--surface-soft) p-3 text-sm">
            <p className="text-(--text-muted)">Tournaments Won</p>
            <p className="text-xl font-bold">{demoUser.stats.tournamentsWon}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
