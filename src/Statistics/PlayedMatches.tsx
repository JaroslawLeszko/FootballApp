import { useState } from "react";
import { MatchEntity } from "../types";
import styled from "styled-components";
import { noButton } from "../Helpers/commonElements";

const ButtonBar = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

const PeriodButton = styled.button`
  ${noButton}
  margin: 2px;
  margin-top: 5px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  box-sizing: border-box;
`;

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
        <ButtonBar>
          <PeriodButton onClick={() => setShowPeriod("day")}>
            Last day
          </PeriodButton>
          <PeriodButton onClick={() => setShowPeriod("week")}>
            Last week
          </PeriodButton>
          <PeriodButton onClick={() => setShowPeriod("month")}>
            Last month
          </PeriodButton>
        </ButtonBar>
        <div>
          {showPeriod === "day" ? (
            <h3>Matches playet today: {matchesPlayedToday()}</h3>
          ) : undefined}
          {showPeriod === "week" ? (
            <h3>Matches playet last week: {matchesPlayedPeriodDays(7)}</h3>
          ) : undefined}
          {showPeriod === "month" ? (
            <h3>Matches playet last month: {matchesPlayedPeriodDays(30)}</h3>
          ) : undefined}
        </div>
      </div>
    </>
  );
};
