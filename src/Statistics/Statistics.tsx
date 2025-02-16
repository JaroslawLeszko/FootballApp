import styled from "styled-components";
import { useGetMatchesQuery } from "../queries/useGetMatchesQuery";
import { MatchEntity } from "../types";
import { LastMatch } from "./LastMatch";
import { PlayedMatches } from "./PlayedMatches";
import { Top3GoalsScored } from "./Top3GoalsScored";

const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  padding: 8px;
`;

export const Statistics = () => {
  const { data } = useGetMatchesQuery();

  if (!data) return <p>No data...</p>;

  const matchesSortedByDate = [...data].sort(
    (a: MatchEntity, b: MatchEntity) =>
      new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <StatisticsContainer>
      <h2>Statistics</h2>
      <LastMatch lastMatch={matchesSortedByDate[0]} />
      <PlayedMatches matches={data} />
      <Top3GoalsScored />
    </StatisticsContainer>
  );
};
