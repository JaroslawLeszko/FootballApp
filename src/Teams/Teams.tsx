import { AddTeam } from "../Teams/AddTeam";
import { useGetTeamQuery } from "../queries/useGetTeamQuery";
import { SingleTeam } from "../Teams/SingleTeam";
import styled from "styled-components";

const TeamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  padding: 8px;
`;

const StyledList = styled.ul`
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  gap: 8px;
  justify-content: center;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;

export const Teams = () => {
  const { data, isFetching } = useGetTeamQuery();
  if (isFetching) return <p>Loading...</p>;

  if (!data) return <p>Loading...</p>;
  return (
    <TeamsContainer>
      <h2>TEAMS</h2>
      <StyledList>
        {data.map((team) => (
          <SingleTeam team={team} key={team.id} />
        ))}
      </StyledList>
      <AddTeam />
    </TeamsContainer>
  );
};
