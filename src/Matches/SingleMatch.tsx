import { useState } from "react";
import { MatchEntity } from "../types";
import { EditMatch } from "./EditMatch";
import styled from "styled-components";
import { commonButton } from "../Helpers/commonButton";

const StyledListElement = styled.li`
  list-style: none;
  background-color: #3e7cb1;
  margin: 10px;
  padding: 15px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 11px 11px 20px -12px rgba(66, 68, 90, 1);
`;

const MatchInfo = styled.div`
  display: flex;
  flex-direction: column;
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

const EditButton = styled.button`
  ${commonButton}
  background-color: ${(props) => props.theme.colors.secondary};
  &:hover {
    background: linear-gradient(90deg, #a6bedb, #5c8abf);
  }
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
          <Info>{match.teamAResult}</Info> : <Info>{match.teamBResult}</Info>
        </Info>
        <Details>
          <Info>
            <Info>Date: </Info>
            {match.date}
          </Info>
          <Info>
            <Info>Place: </Info>
            {match.place}
          </Info>
          <Info>
            <Info>Time of play </Info>
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
