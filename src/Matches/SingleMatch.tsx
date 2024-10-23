import { MatchEntity } from "../types";

type SingleMatchProps = {
  match: MatchEntity;
};

export const SingleMatch = ({ match }: SingleMatchProps) => {
  return (
    <li>
      <p>
        {match.teamA} vs {match.teamB}
      </p>
      <p>{match.result}</p>
    </li>
  );
};
