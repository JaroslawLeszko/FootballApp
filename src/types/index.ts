export type ViewType = "players" | "teams" | "matches" | "statistics";

export type PlayerEntity = {
  id: string;
  firstName: string;
  lastName: string;
  teamID: string;
};

export type PlayerDto = Omit<PlayerEntity, "id">;
