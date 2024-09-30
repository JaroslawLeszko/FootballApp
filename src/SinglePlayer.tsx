import { PlayerEntity } from "./types";

type SinglePlayerProps = {
  player: PlayerEntity;
};

export const SinglePlayer = ({ player }: SinglePlayerProps) => {
  return (
    <li>
      <p>
        {player.firstName} {player.lastName} {player.teamID}
      </p>
    </li>
  );
};
