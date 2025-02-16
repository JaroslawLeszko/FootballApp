import { AddPlayer } from "./AddPlayer";
import { useGetPlayersQuery } from "../queries/useGetPlayersQuery";
import { SinglePlayer } from "./SinglePlayer";
import styled from "styled-components";
import { commonContainer, commonUl } from "../Helpers/commonElements";

const PlayersContainer = styled.div`
  ${commonContainer}
`;

const StyledList = styled.ul`
  ${commonUl}
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
