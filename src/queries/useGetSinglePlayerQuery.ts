import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { PlayerEntity } from "../types";

export const useGetSinglePlayerQuery = (playerId: string) => {
  const { apiGet } = useApi();
  const { data, isSuccess } = useQuery({
    queryKey: ["singlePlayer", playerId],
    queryFn: async () => {
      return await apiGet<PlayerEntity>(`players/${playerId}`);
    },
    enabled: !!playerId,
  });
  return {
    data,
    isSuccess,
  };
};
