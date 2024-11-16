import { useGetMatchesQuery } from "../queries/useGetMatchesQuery";
import { AddMatch } from "./AddMatch";
import { SingleMatch } from "./SingleMatch";

export const Matches = () => {
  const { data, isFetching } = useGetMatchesQuery();
  if (isFetching) return <p>Loading...</p>;

  if (!data) return <p>No data...</p>;
  return (
    <>
      <h2>Matches</h2>
      <ul>
        {data.map((match) => (
          <SingleMatch match={match} key={match.id} />
        ))}
      </ul>
      <br />
      <p>
        <strong>Add match</strong>
      </p>
      <AddMatch />
    </>
  );
};
