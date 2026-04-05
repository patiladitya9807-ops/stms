import { Card } from "@/components/ui/card";
import type { MatchFixture } from "@/types/tournament";

type BracketViewProps = {
  fixtures: MatchFixture[];
};

export function BracketView({ fixtures }: BracketViewProps) {
  return (
    <Card className="overflow-x-auto p-4">
      <h3 className="mb-3 text-lg font-bold">Live Bracket</h3>
      <div className="flex min-w-[760px] gap-3">
        {fixtures.map((fixture) => (
          <div key={fixture.id} className="w-48 rounded-2xl border border-(--border) bg-(--surface-soft) p-3">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-(--text-muted)">{fixture.round}</p>
            <p className="mt-2 text-sm font-semibold text-(--text)">{fixture.teamA}</p>
            <p className="text-sm text-(--text-muted)">vs</p>
            <p className="text-sm font-semibold text-(--text)">{fixture.teamB}</p>
            <p className="mt-2 text-xs text-(--text-muted)">
              {fixture.scoreA ?? "-"} : {fixture.scoreB ?? "-"}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
