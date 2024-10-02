import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { TeamPlayers } from "../types";

export const useGetTeamPlayersQuery = (teamId: string) => {
  const { apiGet } = useApi();
  const { data, isFetching } = useQuery({
    queryKey: ["teamPlayers", teamId],
    queryFn: async () => {
      return await apiGet<TeamPlayers>(`teams/${teamId}?_embed=players`);
    },
  });
  return { data: data ? data.players : undefined, isFetching };
};
