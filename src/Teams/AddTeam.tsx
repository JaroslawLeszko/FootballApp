import { ChangeEvent, FormEvent, useState } from "react";
import { useAddTeamMutation } from "../queries/useAddTeamMutation";
import { TeamForm } from "./TeamForm";

export const AddTeam = () => {
  const { mutate, isPending } = useAddTeamMutation();
  const [values, setValues] = useState({
    name: "",
    localization: "",
    yearOfFoundation: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: name === "yearOfFoundation" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate(values);
    setValues({ name: "", localization: "", yearOfFoundation: 0 });
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
