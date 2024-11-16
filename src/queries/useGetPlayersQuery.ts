import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { PlayerEntity } from "../types";

export const useGetPlayersQuery = () => {
  const { apiGet } = useApi();
  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ["players"],
    queryFn: async () => {
      return await apiGet<PlayerEntity[]>("players");
    },
  });
  return { data, isFetching, error, refetch };
};
