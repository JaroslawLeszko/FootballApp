import styled from "styled-components";
import { useDeleteTeamMutation } from "../queries/useDeleteTeamMutation";
import { TeamEntity } from "../types";
import { noButton, yesButton } from "../Helpers/commonElements";

const YesButton = styled.button`
  ${yesButton}
  background-color: ${(props) => props.theme.colors.delete};
`;

const NoButton = styled.button`
  ${noButton}
  background-color: ${(props) => props.theme.colors.secondary};
`;

type DeleteTeamProps = {
  team: TeamEntity;
  onCancel: () => void;
};
export const DeleteTeam = ({ team, onCancel }: DeleteTeamProps) => {
  const { mutate, isPending } = useDeleteTeamMutation(team.id);

  const handleDelete = () => {
    mutate();
  };

  if (isPending) return <p>Loading...</p>;

  return (
    <div>
      <p>Do you want to delete {team.name}?</p>
      <YesButton onClick={handleDelete}>Yes</YesButton>
      <NoButton onClick={onCancel}>No</NoButton>
    </div>
  );
};
