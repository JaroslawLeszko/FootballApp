import { MatchEntity } from "../types";

type LastMatchProps = {
  lastMatch: MatchEntity;
};
export const LastMatch = ({ lastMatch }: LastMatchProps) => {
  return (
    <div>
      <h2>Last Match</h2>
      <p>
        {lastMatch.teamA[0]} vs {lastMatch.teamB[0]}
      </p>
      <p>
        {lastMatch.teamAResult} : {lastMatch.teamBResult}
      </p>
      <p>{lastMatch.date}</p>
      <p>{lastMatch.place}</p>
    </div>
  );
};
