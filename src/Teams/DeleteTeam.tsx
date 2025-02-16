import styled from "styled-components";
import { useDeleteTeamMutation } from "../queries/useDeleteTeamMutation";
import { TeamEntity } from "../types";
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
