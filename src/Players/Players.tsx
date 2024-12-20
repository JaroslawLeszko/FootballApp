import { AddPlayer } from "./AddPlayer";
import { useGetPlayersQuery } from "../queries/useGetPlayersQuery";
import { SinglePlayer } from "./SinglePlayer";

export const Players = () => {
  const { data, isFetching } = useGetPlayersQuery();

  if (isFetching) return <p>Loading...</p>;

  if (!data) return <p>No data...</p>;
  return (
    <>
      <h2>Players</h2>
      <ul>
        {data.map((player) => (
          <SinglePlayer player={player} key={player.id} />
        ))}
      </ul>
      <br />
      <p>
        <strong>Add player</strong>
      </p>
      <AddPlayer />
    </>
  );
};
