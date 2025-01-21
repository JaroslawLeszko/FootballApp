import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { TeamEntity } from "../types";

export const useGetSingleTeam = (teamId: string) => {
  const { apiGet } = useApi();
  const { data, isSuccess } = useQuery({
    queryKey: ["singleTeam", teamId],
    queryFn: async () => {
      return await apiGet<TeamEntity>(`teams/${teamId}`);
    },
    enabled: !!teamId,
  });
  return {
    data,
    isSuccess,
  };
};
