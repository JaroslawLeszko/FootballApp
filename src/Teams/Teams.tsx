import { AddTeam } from "../Teams/AddTeam";
import { useGetTeamQuery } from "../queries/useGetTeamQuery";
import { SingleTeam } from "../Teams/SingleTeam";
import styled from "styled-components";
import { commonContainer, commonUl } from "../Helpers/commonElements";

const TeamsContainer = styled.div`
  ${commonContainer}
`;

const StyledList = styled.ul`
  ${commonUl}
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
