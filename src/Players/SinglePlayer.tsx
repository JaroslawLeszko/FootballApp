import { useState } from "react";
import { PlayerEntity } from "../types";
import { EditPlayer } from "./EditPlayer";
import { DeletePlayer } from "./DeletePlayer";
import styled from "styled-components";
import { commonButton } from "../Helpers/commonButton";
import { useGetSingleTeam } from "../queries/useGetSingleTeam";

const DeleteButton = styled.button`
  ${commonButton}
  background-color: ${(props) => props.theme.colors.delete};
  &:hover {
    background: linear-gradient(90deg, #f19b00, #f14b00);
  }
`;

const EditButton = styled.button`
  ${commonButton}
  background-color: ${(props) => props.theme.colors.secondary};
  &:hover {
    background: linear-gradient(90deg, #a6bedb, #5c8abf);
  }
`;

const StyledListElement = styled.li`
  list-style: none;
  background-color: #3e7cb1;
  margin: 10px;
  padding: 15px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 11px 11px 20px -12px rgba(66, 68, 90, 1);
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

  // const { data } = player.teamId
  //   ? useGetSingleTeam(player.teamId)
  //   : { data: null };

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
