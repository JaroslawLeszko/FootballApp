import { useState } from "react";
import { MatchEntity } from "../types";
import { EditMatch } from "./EditMatch";

type SingleMatchProps = {
  match: MatchEntity;
};

export const SingleMatch = ({ match }: SingleMatchProps) => {
  const [mode, setMode] = useState<"edit" | "none">("none");

  const toggleEditMode = () => {
    setMode((prevMode) => (prevMode === "edit" ? "none" : "edit"));
  };

  return (
    <li>
      <p>
        {match.teamA[0]} vs {match.teamB[0]}
      </p>
      <p>
        {match.teamAResult} : {match.teamBResult}
      </p>
      <p>{match.place}</p>
      <p>{match.timeOfPlay}</p>
      <p>{match.date}</p>
      <button onClick={toggleEditMode}>
        {mode === "edit" ? "Cancel" : "Edit"}
      </button>
      {mode === "edit" ? <EditMatch match={match} /> : undefined}
    </li>
  );
};
