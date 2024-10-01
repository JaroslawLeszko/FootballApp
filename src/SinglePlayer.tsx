import { useState } from "react";
import { PlayerEntity } from "./types";
import { EditPlayer } from "./EditPlayer";
import { DeletePlayer } from "./DeletePlayer";

type SinglePlayerProps = {
  player: PlayerEntity;
};

export const SinglePlayer = ({ player }: SinglePlayerProps) => {
  const [mode, setMode] = useState<"edit" | "delete" | "none">("none");

  const toggleEditMode = () => {
    setMode((prevMode) => (prevMode === "edit" ? "none" : "edit"));
  };

  const toggleDeleteMode = () => {
    setMode((prevMode) => (prevMode === "delete" ? "none" : "delete"));
  };

  return (
    <li>
      <p>
        {player.firstName} {player.lastName} {player.teamID}
      </p>
      <button onClick={toggleEditMode}>
        {mode === "edit" ? "Cancel" : "Edit"}
      </button>
      {mode === "edit" ? <EditPlayer player={player} /> : undefined}
      <button onClick={toggleDeleteMode}>
        {mode === "delete" ? "Cancel" : "Delete"}
      </button>
      {mode === "delete" ? (
        <DeletePlayer player={player} onCancel={toggleDeleteMode} />
      ) : undefined}
    </li>
  );
};
