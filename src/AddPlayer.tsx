import { ChangeEvent, FormEvent, useState } from "react";
import { useAddPlayerMutation } from "./queries/useAddPlayerMutation";
import { PlayerForm } from "./PlayerForm";

export const AddPlayer = () => {
  const { mutate, isPending } = useAddPlayerMutation();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    teamID: "",
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
    setValues({ firstName: "", lastName: "", teamID: "" });
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
