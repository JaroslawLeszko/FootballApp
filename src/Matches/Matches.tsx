import styled from "styled-components";
import { useGetMatchesQuery } from "../queries/useGetMatchesQuery";
import { AddMatch } from "./AddMatch";
import { SingleMatch } from "./SingleMatch";
import { commonContainer, commonUl } from "../Helpers/commonElements";

const MatchesContainer = styled.div`
  ${commonContainer}
`;

const StyledList = styled.ul`
  ${commonUl}
`;

export const Matches = () => {
  const { data, isFetching } = useGetMatchesQuery();
  if (isFetching) return <p>Loading...</p>;

  if (!data) return <p>No data...</p>;
  return (
    <MatchesContainer>
      <h2>Matches</h2>
      <StyledList>
        {data.map((match) => (
          <SingleMatch match={match} key={match.id} />
        ))}
      </StyledList>
      <AddMatch />
    </MatchesContainer>
  );
};
