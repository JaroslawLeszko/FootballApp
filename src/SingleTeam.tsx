import { useState } from "react";
import { TeamEntity } from "./types";
import { useGetTeamPlayersQuery } from "./queries/useGetTeamPlayersQuery";

type SingleTeamProps = {
  team: TeamEntity;
};

export const SingleTeam = ({ team }: SingleTeamProps) => {
  const { data, isFetching } = useGetTeamPlayersQuery(team.id);
  const [showPlayers, setShowPlayers] = useState(false);
  console.log(data);

  const handleShowPlayers = () => {
    setShowPlayers((prev) => !prev);
  };

  if (isFetching) <p>Loading...</p>;
  return (
    <div>
      <p>
        {team.name} {team.localization} {team.yearOfFoundation}
      </p>
      <button onClick={handleShowPlayers}>Show players</button>
      {showPlayers && (
        <ul>
          {data?.map((player) => (
            <li key={player.id}>
              {player.firstName} {player.lastName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
