import styled from "styled-components";
import { useGetMatchesQuery } from "../queries/useGetMatchesQuery";
import { AddMatch } from "./AddMatch";
import { SingleMatch } from "./SingleMatch";

const MatchesContainer = styled.div`
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
