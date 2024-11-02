import { ChangeEvent, FormEvent, useState } from "react";
import { useEditMatchMutation } from "../queries/useEditMatchMutation";
import { MatchEntity } from "../types";
import { MatchForm } from "./MatchForm";

type EditMatchProps = {
  match: MatchEntity;
};

export const EditMatch = ({ match }: EditMatchProps) => {
  const { mutate, isPending } = useEditMatchMutation(match.id);

  const [values, setValues] = useState({
    matchName: match.matchName,
    date: match.date,
    place: match.place,
    timeOfPlay: match.timeOfPlay,
    result: match.result,
    teamA: match.teamA,
    teamB: match.teamB,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
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
    <MatchForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      values={values}
      isPending={isPending}
    />
  );
};
