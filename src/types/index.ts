export type ViewType = "players" | "teams" | "matches" | "statistics";

export type PlayerEntity = {
  id: string;
  firstName: string;
  lastName: string;
  teamId: string;
};

export type PlayerDto = Omit<PlayerEntity, "id">;

export type TeamEntity = {
  id: string;
  name: string;
  yearOfFoundation: number;
  localization: string;
};

export type TeamDto = Omit<TeamEntity, "id">;

export type TeamPlayers = TeamEntity & {
  players: PlayerEntity[];
};
