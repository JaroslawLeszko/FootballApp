import { useState } from "react";
import { useEditPlayerMutation } from "../queries/useEditPlayerMutation";
import { PlayerEntity } from "../types";
import styled from "styled-components";
import { yesButton } from "../Helpers/commonElements";

const StyledListElement = styled.li`
  list-style: dot;
  background-color: #3e7cb1;
`;

const Player = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2px;
  padding: 2px;
`;

const RemoveButton = styled.button`
  ${yesButton}
  margin: 4px;
  padding: 4px;
  background-color: ${(props) => props.theme.colors.delete};
`;

type SingleTeamPlayerProps = {
  singlePlayer: PlayerEntity;
  onRemove: () => void;
};
export const SingleTeamPlayer = ({
  singlePlayer,
  onRemove,
}: SingleTeamPlayerProps) => {
  const { mutate, isPending } = useEditPlayerMutation(singlePlayer.id);
  const [values, setValues] = useState({
    firstName: singlePlayer.firstName,
    lastName: singlePlayer.lastName,
    teamId: singlePlayer.teamId,
  });

  const handleChange = () => {
    const updated = { ...values, teamId: "" };
    setValues(updated);
    mutate(updated, {
      onSuccess: () => {
        onRemove();
      },
    });
  };

  if (isPending) return <p>Loading...</p>;

  return (
    <StyledListElement>
      <Player>
        {singlePlayer.firstName} {singlePlayer.lastName}
        <RemoveButton onClick={handleChange}>Remove</RemoveButton>
      </Player>
    </StyledListElement>
  );
};
