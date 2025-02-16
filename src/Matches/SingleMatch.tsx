import { useState } from "react";
import { MatchEntity } from "../types";
import { EditMatch } from "./EditMatch";
import styled from "styled-components";
import { commonLi, noButton } from "../Helpers/commonElements";

const StyledListElement = styled.li`
  ${commonLi}
`;

const MatchInfo = styled.div`
  display: flex;
  flex-direction: column;
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

const EditButton = styled.button`
  ${noButton}
  background-color: ${(props) => props.theme.colors.secondary};
`;

type SingleMatchProps = {
  match: MatchEntity;
};

export const SingleMatch = ({ match }: SingleMatchProps) => {
  const [mode, setMode] = useState<"edit" | "none">("none");

  const toggleEditMode = () => {
    setMode((prevMode) => (prevMode === "edit" ? "none" : "edit"));
  };

  return (
    <StyledListElement>
      <MatchInfo>
        <Info>
          <strong>{match.teamA[0]}</strong>
          <strong>{match.teamB[0]}</strong>
        </Info>
        <Info>
          <InfoLine>{match.teamAResult}</InfoLine> :{" "}
          <InfoLine>{match.teamBResult}</InfoLine>
        </Info>
        <Details>
          <Info>
            <InfoLine>Date: </InfoLine>
            {match.date}
          </Info>
          <Info>
            <InfoLine>Place: </InfoLine>
            {match.place}
          </Info>
          <Info>
            <InfoLine>Time of play: </InfoLine>
            {match.timeOfPlay} minutes
          </Info>
        </Details>
      </MatchInfo>
      <EditButton onClick={toggleEditMode}>
        {mode === "edit" ? "Cancel" : "Edit"}
      </EditButton>
      {mode === "edit" ? <EditMatch match={match} /> : undefined}
    </StyledListElement>
  );
};
