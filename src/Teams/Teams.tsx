import { AddTeam } from "../Teams/AddTeam";
import { useGetTeamQuery } from "../queries/useGetTeamQuery";
import { SingleTeam } from "../Teams/SingleTeam";

export const Teams = () => {
  const { data, isFetching } = useGetTeamQuery();
  if (isFetching) return <p>Loading...</p>;

  if (!data) return <p>Loading...</p>;
  return (
    <>
      <h2>Teams</h2>
      <ul>
        {data.map((team) => (
          <SingleTeam team={team} key={team.id} />
        ))}
      </ul>
      <br />
      <p>
        <strong>Add team</strong>
      </p>
      <AddTeam />
    </>
  );
};
