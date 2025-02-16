import styled from "styled-components";
import { useGetTeamQuery } from "../queries/useGetTeamQuery";
import { TeamEntity } from "../types";

const Top3 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

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
        <div>
          <Top3>
            <h3>1. {top3Sort[0].name}</h3>
            <h3>{top3Sort[0].goalsScored} goals.</h3>
          </Top3>
          <Top3>
            <p>
              <strong>2. {top3Sort[1].name}</strong>
            </p>
            <p>
              <strong>{top3Sort[1].goalsScored} goals.</strong>
            </p>
          </Top3>
          <Top3>
            <p>
              <strong>3. {top3Sort[2].name}</strong>
            </p>
            <p>
              <strong>{top3Sort[2].goalsScored} goals.</strong>
            </p>
          </Top3>
        </div>
      </div>
    </>
  );
};
