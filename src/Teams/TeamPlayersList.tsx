import { useEffect, useState } from "react";
import { useEditPlayerMutation } from "../queries/useEditPlayerMutation";
import { useGetSinglePlayerQuery } from "../queries/useGetSinglePlayerQuery";
import { useGetPlayersQuery } from "../queries/useGetPlayersQuery";
import styled from "styled-components";

const Select = styled.select`
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.secondary};
  box-sizing: border-box;
`;

type TeamPlayersListProps = {
  newPlayerTeamId: string;
  onAddPlayer: () => void;
};
export const TeamPlayersList = ({
  newPlayerTeamId,
  onAddPlayer,
}: TeamPlayersListProps) => {
  const { data, isFetching } = useGetPlayersQuery();

  const [selectedPlayerId, setSelectedPlayerId] = useState("");
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    teamId: "",
  });
  const handleAssignPlayer = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    setSelectedPlayerId(selectedId);
  };

  const { data: playerData } = useGetSinglePlayerQuery(selectedPlayerId);

  const { mutate } = useEditPlayerMutation(selectedPlayerId);

  useEffect(() => {
    if (playerData) {
      setValues({
        firstName: playerData.firstName,
        lastName: playerData.lastName,
        teamId: playerData.teamId,
      });
    }
  }, [playerData]);

  useEffect(() => {
    if (values.firstName !== "") {
      mutate(
        { ...values, teamId: newPlayerTeamId },
        {
          onSuccess: () => {
            onAddPlayer();
          },
        },
      );
    }
  }, [values]);

  if (!data) return <p>No asignable players</p>;
  if (isFetching) return <p>Loading</p>;
  const freePlayers = data?.filter((player) => player.teamId === "");

  return (
    <div>
      <div>
        <label htmlFor="yearOfFoundation">Add player to team</label>
      </div>
      <Select name="" id="" onChange={handleAssignPlayer}>
        <option value="">Select player</option>
        {freePlayers.map((player) => (
          <option value={player.id} key={player.id}>
            {player.firstName} {player.lastName}
          </option>
        ))}
      </Select>
    </div>
  );
};
