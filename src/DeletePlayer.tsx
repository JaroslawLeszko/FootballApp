import { useDeletePlayerMutation } from "./queries/useDeletePlayerMutation";
import { PlayerEntity } from "./types";

type DeletePlayerProps = {
  player: PlayerEntity;
  onCancel: () => void;
};

export const DeletePlayer = ({ player, onCancel }: DeletePlayerProps) => {
  const { mutate, isPending } = useDeletePlayerMutation(player.id);

  const handleDelete = () => {
    mutate();
  };

  if (player.teamID) {
    return <p>Player is in a team. Remove it from team before deleting.</p>;
  }

  if (isPending) return <p>Loading...</p>;

  return (
    <div>
      <p>
        Do you want to delete {player.firstName} {player.lastName}
      </p>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
};
