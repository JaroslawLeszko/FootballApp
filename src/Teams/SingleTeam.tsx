import { useState } from "react";
import { TeamEntity } from "../types";
import { useGetTeamPlayersQuery } from "../queries/useGetTeamPlayersQuery";

import { TeamPlayersList } from "./TeamPlayersList";
import { SingleTeamPlayer } from "./SingleTeamPlayer";
import { EditTeam } from "./EditTeam";
import { DeleteTeam } from "./DeleteTeam";

type SingleTeamProps = {
  team: TeamEntity;
};

export const SingleTeam = ({ team }: SingleTeamProps) => {
  const { data, isFetching, refetch } = useGetTeamPlayersQuery(team.id);
  const [showPlayers, setShowPlayers] = useState(false);

  const [mode, setMode] = useState<"edit" | "delete" | "none">("none");

  const toggleEditMode = () => {
    setMode((prevMode) => (prevMode === "edit" ? "none" : "edit"));
  };

  const toggleDeleteMode = () => {
    setMode((prevMode) => (prevMode === "delete" ? "none" : "delete"));
  };

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
        <button onClick={toggleEditMode}>
          {mode === "edit" ? "Cancel" : "Edit"}
        </button>
        {mode === "edit" ? <EditTeam team={team} /> : undefined}
        <button onClick={toggleDeleteMode}>
          {mode === "delete" ? "Cancel" : "Delete"}
        </button>
        {mode === "delete" ? (
          <DeleteTeam team={team} onCancel={toggleDeleteMode} />
        ) : undefined}
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
