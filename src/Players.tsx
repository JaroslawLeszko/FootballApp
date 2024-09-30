import { AddPlayer } from "./AddPlayer";
import { useGetPlayersQuery } from "./queries/useGetPlayersQuery";
import { SinglePlayer } from "./SinglePlayer";

export const Players = () => {
  const { data, isFetching } = useGetPlayersQuery();
  console.log(data);

  if (isFetching) return <p>Loading...</p>;

  if (!data) return <p>No data...</p>;
  return (
    <>
      <ul>
        {data.map((player) => (
          <SinglePlayer player={player} key={player.id} />
        ))}
      </ul>
      <br />
      <p>
        <strong>Add player</strong>
        <AddPlayer />
      </p>
    </>
  );
};
