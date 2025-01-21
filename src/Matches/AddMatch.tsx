import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAddMatchMutation } from "../queries/useAddMatchMutation";
import { MatchForm } from "./MatchForm";
import { useGetSingleTeam } from "../queries/useGetSingleTeam";
import { useEditTeamMutation } from "../queries/useEditTeamMutation";

export const AddMatch = () => {
  const { mutate, isPending } = useAddMatchMutation();

  const [values, setValues] = useState({
    matchName: "",
    date: "",
    place: "",
    timeOfPlay: 0,
    teamAResult: 0,
    teamBResult: 0,
    teamA: [],
    teamB: [],
  });

  const [goalsScoredA, setGoalsScoredA] = useState({
    name: "",
    yearOfFoundation: 0,
    localization: "",
    goalsScored: 0,
  });

  const { data: teamAData } = useGetSingleTeam(values.teamA[1]);

  useEffect(() => {
    if (teamAData) {
      setGoalsScoredA({
        name: teamAData.name,
        yearOfFoundation: teamAData.yearOfFoundation,
        localization: teamAData.localization,
        goalsScored: teamAData.goalsScored,
      });
    }
  }, [teamAData]);

  const [goalsScoredB, setGoalsScoredB] = useState({
    name: "",
    yearOfFoundation: 0,
    localization: "",
    goalsScored: 0,
  });

  const { data: teamBData } = useGetSingleTeam(values.teamB[1]);

  useEffect(() => {
    if (teamBData) {
      setGoalsScoredB({
        name: teamBData.name,
        yearOfFoundation: teamBData.yearOfFoundation,
        localization: teamBData.localization,
        goalsScored: teamBData.goalsScored,
      });
    }
  }, [teamBData]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "teamAResult") {
      const newScore = Number(value);
      const difference = newScore - values.teamAResult;
      setGoalsScoredA((prev) => ({
        ...prev,
        goalsScored: (prev.goalsScored || 0) + difference,
      }));
    }
    if (name === "teamBResult") {
      const newScore = Number(value);
      const difference = newScore - values.teamBResult;
      setGoalsScoredB((prev) => ({
        ...prev,
        goalsScored: (prev.goalsScored || 0) + difference,
      }));
    }

    setValues((prevValues) => ({
      ...prevValues,
      [name]:
        name === "timeOfPlay" ||
        name === "teamAResult" ||
        name === "teamBResult"
          ? Number(value)
          : name === "teamA" || name === "teamB"
            ? value.split(",")
            : value,
    }));
  };

  const { mutate: MutateScoreA } = useEditTeamMutation(values.teamA[1]);
  const { mutate: MutateScoreB } = useEditTeamMutation(values.teamB[1]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (goalsScoredA) {
      MutateScoreA(goalsScoredA);
    }
    if (goalsScoredB) {
      MutateScoreB(goalsScoredB);
    }
    mutate(values);
    setValues({
      matchName: "",
      date: "",
      place: "",
      timeOfPlay: 0,
      teamAResult: 0,
      teamBResult: 0,
      teamA: [],
      teamB: [],
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
