import { useDeleteTeamMutation } from "../queries/useDeleteTeamMutation";
import { TeamEntity } from "../types";

type DeleteTeamProps = {
  team: TeamEntity;
  onCancel: () => void;
};
export const DeleteTeam = ({ team, onCancel }: DeleteTeamProps) => {
  const { mutate, isPending } = useDeleteTeamMutation(team.id);

  const handleDelete = () => {
    mutate();
  };

  //   if (team.teamId) {
  //     return <p>Player is in a team. Remove it from team before deleting.</p>;
  //   }

  if (isPending) return <p>Loading...</p>;

  return (
    <div>
      <p>Do you want to delete {team.name}</p>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
};
