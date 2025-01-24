import { useGetTeamQuery } from "../queries/useGetTeamQuery";
import { TeamEntity } from "../types";

export const Top3GoalsScored = () => {
  const { data } = useGetTeamQuery();

  if (!data) return <p>No data...</p>;

  const top3Sort = [...data].sort(
    (a: TeamEntity, b: TeamEntity) => b.goalsScored - a.goalsScored,
  );

  return (
    <>
      <div>
        <h2>Top 3 goals scored</h2>
        <p>
          1. {top3Sort[0].name} goals: {top3Sort[0].goalsScored}
        </p>
        <p>
          2. {top3Sort[1].name} goals: {top3Sort[1].goalsScored}
        </p>
        <p>
          3. {top3Sort[2].name} goals: {top3Sort[2].goalsScored}
        </p>
      </div>
    </>
  );
};
