import { useState } from "react";
import { TeamEntity } from "../types";
import { useGetTeamPlayersQuery } from "../queries/useGetTeamPlayersQuery";

import { TeamPlayersList } from "./TeamPlayersList";
import { SingleTeamPlayer } from "./SingleTeamPlayer";

type SingleTeamProps = {
  team: TeamEntity;
};

export const SingleTeam = ({ team }: SingleTeamProps) => {
  const { data, isFetching, refetch } = useGetTeamPlayersQuery(team.id);
  const [showPlayers, setShowPlayers] = useState(false);

  const handleRefetch = () => {
    refetch();
  };

  const handleShowPlayers = () => {
    setShowPlayers((prev) => !prev);
  };

  if (!data) return <p>No asignable players</p>;

  if (isFetching) <p>Loading...</p>;

  return (
    <>
      <div>
        <p>
          {team.name} {team.localization} {team.yearOfFoundation}
        </p>
        <button onClick={handleShowPlayers}>Show players</button>
        {showPlayers && (
          <div>
            <ul>
              {data?.map((player) => (
                <SingleTeamPlayer
                  singlePlayer={player}
                  key={player.id}
                  onRemove={handleRefetch}
                />
              ))}
            </ul>
            <TeamPlayersList
              newPlayerTeamId={team.id}
              onAddPlayer={handleRefetch}
            />
          </div>
        )}
      </div>
    </>
  );
};
