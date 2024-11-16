import { ChangeEvent, FormEvent, useState } from "react";
import { useAddMatchMutation } from "../queries/useAddMatchMutation";
import { MatchForm } from "./MatchForm";

export const AddMatch = () => {
  const { mutate, isPending } = useAddMatchMutation();
  const [values, setValues] = useState({
    matchName: "",
    date: "",
    place: "",
    timeOfPlay: 0,
    result: "",
    teamA: "",
    teamB: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: name === "timeOfPlay" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate(values);
    setValues({
      matchName: "",
      date: "",
      place: "",
      timeOfPlay: 0,
      result: "",
      teamA: "",
      teamB: "",
    });
  };
  if (isPending) return <p>Loading...</p>;

  return (
    <MatchForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      values={values}
      isPending={isPending}
    />
  );
};
