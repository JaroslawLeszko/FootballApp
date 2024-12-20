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

export type MatchEntity = {
  id: string;
  matchName: string;
  date: string;
  place: string;
  timeOfPlay: number;
  result: string;
  teamA: string;
  teamB: string;
};

export type MatchDto = Omit<MatchEntity, "id">;
