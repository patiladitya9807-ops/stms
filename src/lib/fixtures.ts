import type { MatchFixture, TournamentFormat } from "@/types/tournament";

export function generateFixtures(teams: string[], format: TournamentFormat): MatchFixture[] {
  if (teams.length < 2) {
    return [];
  }

  if (format === "knockout" || format === "double-elimination") {
    const fixtures: MatchFixture[] = [];
    const paddedTeams = [...teams];

    while ((paddedTeams.length & (paddedTeams.length - 1)) !== 0) {
      paddedTeams.push("BYE");
    }

    for (let i = 0; i < paddedTeams.length; i += 2) {
      fixtures.push({
        id: `qf-${i / 2 + 1}`,
        round: "Quarterfinal",
        teamA: paddedTeams[i],
        teamB: paddedTeams[i + 1],
        startsAt: new Date(Date.now() + i * 3600000).toISOString(),
      });
    }

    return fixtures;
  }

  const roundRobin: MatchFixture[] = [];
  let fixtureCounter = 1;

  for (let i = 0; i < teams.length; i += 1) {
    for (let j = i + 1; j < teams.length; j += 1) {
      roundRobin.push({
        id: `rr-${fixtureCounter}`,
        round: "League Stage",
        teamA: teams[i],
        teamB: teams[j],
        startsAt: new Date(Date.now() + fixtureCounter * 3600000).toISOString(),
      });
      fixtureCounter += 1;
    }
  }

  return roundRobin;
}
