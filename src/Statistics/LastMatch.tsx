import { MatchEntity } from "../types";

type LastMatchProps = {
  lastMatch: MatchEntity;
};
export const LastMatch = ({ lastMatch }: LastMatchProps) => {
  return (
    <div>
      <p>
        {lastMatch.teamA} vs {lastMatch.teamB}
      </p>
      <p>{lastMatch.result}</p>
      <p>{lastMatch.date}</p>
      <p>{lastMatch.place}</p>
    </div>
  );
};
