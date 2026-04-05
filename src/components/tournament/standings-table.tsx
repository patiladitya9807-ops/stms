import { Card } from "@/components/ui/card";

type TeamStanding = {
  team: string;
  played: number;
  won: number;
  lost: number;
  points: number;
};

type StandingsTableProps = {
  standings: TeamStanding[];
};

export function StandingsTable({ standings }: StandingsTableProps) {
  return (
    <Card className="overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead className="bg-(--surface-soft) text-(--text-muted)">
          <tr>
            <th className="px-4 py-3">Team</th>
            <th className="px-4 py-3">P</th>
            <th className="px-4 py-3">W</th>
            <th className="px-4 py-3">L</th>
            <th className="px-4 py-3">Pts</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((row) => (
            <tr key={row.team} className="border-t border-(--border)">
              <td className="px-4 py-3 font-semibold text-(--text)">{row.team}</td>
              <td className="px-4 py-3">{row.played}</td>
              <td className="px-4 py-3">{row.won}</td>
              <td className="px-4 py-3">{row.lost}</td>
              <td className="px-4 py-3 font-semibold text-(--accent)">{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
