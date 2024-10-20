import { ChangeEvent, FormEvent, useState } from "react";
import { useEditTeamMutation } from "../queries/useEditTeamMutation";
import { TeamEntity } from "../types";
import { TeamForm } from "./TeamForm";

type EditTeamProps = {
  team: TeamEntity;
};

export const EditTeam = ({ team }: EditTeamProps) => {
  const { mutate, isPending } = useEditTeamMutation(team.id);

  const [values, setValues] = useState({
    name: team.name,
    yearOfFoundation: team.yearOfFoundation,
    localization: team.localization,
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
    <TeamForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      values={values}
      isPending={isPending}
    />
  );
};
