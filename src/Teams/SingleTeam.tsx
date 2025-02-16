import { useState } from "react";
import { TeamEntity } from "../types";
import { useGetTeamPlayersQuery } from "../queries/useGetTeamPlayersQuery";
import { TeamPlayersList } from "./TeamPlayersList";
import { SingleTeamPlayer } from "./SingleTeamPlayer";
import { EditTeam } from "./EditTeam";
import { DeleteTeam } from "./DeleteTeam";
import styled from "styled-components";
import { commonLi, noButton, yesButton } from "../Helpers/commonElements";

const TeamCard = styled.div`
  ${commonLi}
`;

const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.p`
  margin: 2px;
`;

const DeleteButton = styled.button`
  ${yesButton}
  background-color: ${(props) => props.theme.colors.delete};
`;

const ShowEditButton = styled.button`
  ${noButton}
  background-color: ${(props) => props.theme.colors.secondary};
`;

type SingleTeamProps = {
  team: TeamEntity;
};

export const SingleTeam = ({ team }: SingleTeamProps) => {
  const { data, isFetching, refetch } = useGetTeamPlayersQuery(team.id);
  const [showPlayers, setShowPlayers] = useState(false);

  const [mode, setMode] = useState<"edit" | "delete" | "none">("none");

  const toggleEditMode = () => {
    setMode((prevMode) => (prevMode === "edit" ? "none" : "edit"));
  };

  const toggleDeleteMode = () => {
    setMode((prevMode) => (prevMode === "delete" ? "none" : "delete"));
  };

  const handleRefetch = () => {
    refetch();
  };

  const handleShowPlayers = () => {
    setShowPlayers((prev) => !prev);
  };

  if (!data) return <p>No asignable players</p>;

  if (isFetching) <p>Loading...</p>;

  return (
    <>
      <TeamCard>
        <TeamInfo>
          <Info>
            <strong>{team.name}</strong>
          </Info>
          <Info>City: {team.localization}</Info>
          <Info>Year of fundation: {team.yearOfFoundation}</Info>
        </TeamInfo>
        <ShowEditButton onClick={handleShowPlayers}>
          Show players
        </ShowEditButton>
        <ShowEditButton onClick={toggleEditMode}>
          {mode === "edit" ? "Cancel" : "Edit"}
        </ShowEditButton>
        {mode === "edit" ? <EditTeam team={team} /> : undefined}
        <DeleteButton onClick={toggleDeleteMode}>
          {mode === "delete" ? "Cancel" : "Delete"}
        </DeleteButton>
        {mode === "delete" ? (
          <DeleteTeam team={team} onCancel={toggleDeleteMode} />
        ) : undefined}
        {showPlayers && (
          <div>
            <ul>
              {data?.map((player) => (
                <SingleTeamPlayer
                  singlePlayer={player}
                  key={player.id}
                  onRemove={handleRefetch}
                />
              ))}
            </ul>
            <TeamPlayersList
              newPlayerTeamId={team.id}
              onAddPlayer={handleRefetch}
            />
          </div>
        )}
      </TeamCard>
    </>
  );
};
