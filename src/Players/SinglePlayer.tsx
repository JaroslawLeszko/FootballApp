import { useState } from "react";
import { PlayerEntity } from "../types";
import { EditPlayer } from "./EditPlayer";
import { DeletePlayer } from "./DeletePlayer";
import styled from "styled-components";
import { useGetSingleTeam } from "../queries/useGetSingleTeam";
import { commonLi, noButton, yesButton } from "../Helpers/commonElements";

const DeleteButton = styled.button`
  ${yesButton}
  background-color: ${(props) => props.theme.colors.delete};
`;

const EditButton = styled.button`
  ${noButton}
  background-color: ${(props) => props.theme.colors.secondary};
`;

const StyledListElement = styled.li`
  ${commonLi}
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

  const { data } = useGetSingleTeam(player.teamId ?? "");

  return (
    <StyledListElement>
      <div>
        <b>
          {player.firstName} {player.lastName}
        </b>
        <p>Team: {data ? data.name : ""}</p>
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
    </StyledListElement>
  );
};
