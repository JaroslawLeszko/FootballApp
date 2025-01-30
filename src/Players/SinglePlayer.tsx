import { useState } from "react";
import { PlayerEntity } from "../types";
import { EditPlayer } from "./EditPlayer";
import { DeletePlayer } from "./DeletePlayer";
import styled from "styled-components";
import { commonButton } from "../Helpers/commonButton";

const DeleteButton = styled.button`
  ${commonButton}
  background-color: ${(props) => props.theme.colors.delete}
`;

const EditButton = styled.button`
  ${commonButton}
  background-color: ${(props) => props.theme.colors.secondary}
`;

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
      <div>
        <p>
          {player.firstName} {player.lastName}
        </p>
        <p>Team: {player.teamId}</p>
      </div>
      <div>
        <EditButton onClick={toggleEditMode}>
          {mode === "edit" ? "Cancel" : "Edit"}
        </EditButton>
        {mode === "edit" ? <EditPlayer player={player} /> : undefined}
        <DeleteButton onClick={toggleDeleteMode}>
          {mode === "delete" ? "Cancel" : "Delete"}
        </DeleteButton>
        {mode === "delete" ? (
          <DeletePlayer player={player} onCancel={toggleDeleteMode} />
        ) : undefined}
      </div>
    </li>
  );
};
