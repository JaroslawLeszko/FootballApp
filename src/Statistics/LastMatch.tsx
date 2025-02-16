import styled from "styled-components";
import { MatchEntity } from "../types";
import { commonLi } from "../Helpers/commonElements";

const MatchInfo = styled.div`
  ${commonLi}
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoLine = styled.p`
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
          <InfoLine>{lastMatch.teamAResult}</InfoLine> :
          <InfoLine>{lastMatch.teamBResult}</InfoLine>
        </Info>
        <Details>
          <Info>
            <InfoLine>Date: </InfoLine>
            {lastMatch.date}
          </Info>
          <Info>
            <InfoLine>Place: </InfoLine>
            {lastMatch.place}
          </Info>
          <Info>
            <InfoLine>Time of play: </InfoLine>
            {lastMatch.timeOfPlay} minutes
          </Info>
        </Details>
      </MatchInfo>
    </>
  );
};
