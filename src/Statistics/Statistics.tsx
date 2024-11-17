import { useGetMatchesQuery } from "../queries/useGetMatchesQuery";
import { MatchEntity } from "../types";
import { LastMatch } from "./LastMatch";
import { PlayedMatches } from "./PlayedMatches";
import { Top3GoalsScored } from "./Top3GoalsScored";

export const Statistics = () => {
  const { data } = useGetMatchesQuery();

  if (!data) return <p>No data...</p>;

  const matchesSortedByDate = [...data].sort(
    (a: MatchEntity, b: MatchEntity) =>
      new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const matchesPlayedInPeriodOfTime = (timePeriod: string) => {
    const playedMatches = [...data].filter(
      (match) =>
        new Date(match.date).getTime() === new Date(timePeriod).getTime(),
    );
    return playedMatches.length;
  };

  console.log(matchesPlayedInPeriodOfTime("2024-11-17"));

  return (
    <>
      <h2>Statistics</h2>
      <LastMatch lastMatch={matchesSortedByDate[0]} />
      <PlayedMatches />
      <Top3GoalsScored />
    </>
  );
};
