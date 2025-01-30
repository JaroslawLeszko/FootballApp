import { useState } from "react";
import { MatchEntity } from "../types";

type PlayedMatchesProp = {
  matches: MatchEntity[];
};
export const PlayedMatches = ({ matches }: PlayedMatchesProp) => {
  const [showPeriod, setShowPeriod] = useState<
    "day" | "week" | "month" | "none"
  >("none");
  const matchesPlayedToday = () => {
    const playedMatches = [...matches].filter(
      (match) =>
        new Date(match.date).toDateString() === new Date().toDateString(),
    );
    return playedMatches.length;
  };

  const matchesPlayedPeriodDays = (days: number) => {
    const period = days * 24 * 60 * 60 * 1000;
    const formatedPeriod = Date.now() - period;

    const playedMatches = [...matches].filter(
      (match) =>
        new Date(match.date).getTime() >= new Date(formatedPeriod).getTime() &&
        new Date(match.date).getTime() <= new Date().getTime(),
    );
    return playedMatches.length;
  };

  return (
    <>
      <h2>Played Matches</h2>
      <div>
        <div>
          <button onClick={() => setShowPeriod("day")}>Last day</button>
          <button onClick={() => setShowPeriod("week")}>Last week</button>
          <button onClick={() => setShowPeriod("month")}>Last month</button>
        </div>
        <div>
          {showPeriod === "day" ? <p>{matchesPlayedToday()}</p> : undefined}
          {showPeriod === "week" ? (
            <p>{matchesPlayedPeriodDays(7)}</p>
          ) : undefined}
          {showPeriod === "month" ? (
            <p>{matchesPlayedPeriodDays(30)}</p>
          ) : undefined}
        </div>
      </div>
    </>
  );
};
