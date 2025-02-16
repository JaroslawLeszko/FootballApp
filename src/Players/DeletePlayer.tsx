import styled from "styled-components";
import { useDeletePlayerMutation } from "../queries/useDeletePlayerMutation";
import { PlayerEntity } from "../types/index";
import { commonButton } from "../Helpers/commonButton";

const YesButton = styled.button`
  ${commonButton}
  background-color: ${(props) => props.theme.colors.delete};
  &:hover {
    background: linear-gradient(90deg, #f19b00, #f14b00);
  }
`;

const NoButton = styled.button`
  ${commonButton}
  background-color: ${(props) => props.theme.colors.secondary};
  &:hover {
    background: linear-gradient(90deg, #a6bedb, #5c8abf);
  }
`;

type DeletePlayerProps = {
  player: PlayerEntity;
  onCancel: () => void;
};

export const DeletePlayer = ({ player, onCancel }: DeletePlayerProps) => {
  const { mutate, isPending } = useDeletePlayerMutation(player.id);

  const handleDelete = () => {
    mutate();
  };

  if (player.teamId) {
    return <p>Player is in a team. Remove it from team before deleting.</p>;
  }

  if (isPending) return <p>Loading...</p>;

  return (
    <div>
      <p>
        Do you want to delete {player.firstName} {player.lastName}?
      </p>
      <YesButton onClick={handleDelete}>Yes</YesButton>
      <NoButton onClick={onCancel}>No</NoButton>
    </div>
  );
};
