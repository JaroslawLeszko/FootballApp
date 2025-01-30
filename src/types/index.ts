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
  goalsScored: number;
};

export type TeamDto = Omit<TeamEntity, "id" | "goalsScored">;

export type TeamPlayers = TeamEntity & {
  players: PlayerEntity[];
};

export type MatchEntity = {
  id: string;
  matchName: string;
  date: string;
  place: string;
  timeOfPlay: number;
  teamAResult: number;
  teamBResult: number;
  teamA: string[];
  teamB: string[];
};

export type MatchDto = Omit<MatchEntity, "id">;
