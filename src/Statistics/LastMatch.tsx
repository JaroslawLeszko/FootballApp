import styled from "styled-components";
import { MatchEntity } from "../types";
import { commonLi } from "../Helpers/commonElements";

const MatchInfo = styled.div`
  ${commonLi}
`;

const Info = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2px;
  padding: 2px;
`;

const Details = styled.div`
  justify-content: space-between;
`;

type LastMatchProps = {
  lastMatch: MatchEntity;
};
export const LastMatch = ({ lastMatch }: LastMatchProps) => {
  return (
    <>
      <h2>Last Match</h2>
      <MatchInfo>
        <Info>
          <strong>{lastMatch.teamA[0]}</strong>
          <strong>{lastMatch.teamB[0]}</strong>
        </Info>
        <Info>
          <Info>{lastMatch.teamAResult}</Info> :
          <Info>{lastMatch.teamBResult}</Info>
        </Info>
        <Details>
          <Info>
            <Info>Date: </Info>
            {lastMatch.date}
          </Info>
          <Info>
            <Info>Place: </Info>
            {lastMatch.place}
          </Info>
          <Info>
            <Info>Time of play: </Info>
            {lastMatch.timeOfPlay} minutes
          </Info>
        </Details>
      </MatchInfo>
    </>
  );
};
