import styled from "styled-components";
import { useDeletePlayerMutation } from "../queries/useDeletePlayerMutation";
import { PlayerEntity } from "../types/index";
import { noButton, yesButton } from "../Helpers/commonElements";

const YesButton = styled.button`
  ${yesButton}
  background-color: ${(props) => props.theme.colors.delete};
`;

const NoButton = styled.button`
  ${noButton}
  background-color: ${(props) => props.theme.colors.secondary};
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
