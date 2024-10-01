import { ChangeEvent, FormEvent, useState } from "react";
import { PlayerForm } from "./PlayerForm";
import { PlayerEntity } from "./types";
import { useEditPlayerMutation } from "./queries/useEditPlayerMutation";

type EditPlayerProps = {
  player: PlayerEntity;
};

export const EditPlayer = ({ player }: EditPlayerProps) => {
  const { mutate, isPending } = useEditPlayerMutation(player.id);
  const [values, setValues] = useState({
    firstName: player.firstName,
    lastName: player.lastName,
    teamID: player.teamID,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate(values);
  };
  if (isPending) return <p>Loading...</p>;
  return (
    <PlayerForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      values={values}
      isPending={isPending}
    />
  );
};
