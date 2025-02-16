import { AddPlayer } from "./AddPlayer";
import { useGetPlayersQuery } from "../queries/useGetPlayersQuery";
import { SinglePlayer } from "./SinglePlayer";
import styled from "styled-components";

const PlayersContainer = styled.div`
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

export const Players = () => {
  const { data, isFetching } = useGetPlayersQuery();

  if (isFetching) return <p>Loading...</p>;

  if (!data) return <p>No data...</p>;
  return (
    <PlayersContainer>
      <h2>PLAYERS</h2>
      <StyledList>
        {data.map((player) => (
          <SinglePlayer player={player} key={player.id} />
        ))}
      </StyledList>
      <AddPlayer />
    </PlayersContainer>
  );
};
