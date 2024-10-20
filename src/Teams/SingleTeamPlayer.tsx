import { useState } from "react";
import { useEditPlayerMutation } from "../queries/useEditPlayerMutation";
import { PlayerEntity } from "../types";

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
    <li>
      <div>
        {singlePlayer.firstName} {singlePlayer.lastName}
        <button onClick={handleChange}>Remove</button>
      </div>
    </li>
  );
};
