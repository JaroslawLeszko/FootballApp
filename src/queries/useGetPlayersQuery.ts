import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { PlayerEntity } from "../types";

export const useGetPlayersQuery = () => {
  const { apiGet } = useApi();
  const { data, isFetching, error } = useQuery({
    queryKey: ["players"],
    queryFn: async () => {
      return apiGet<PlayerEntity[]>("players");
    },
  });
  return { data, isFetching, error };
};
