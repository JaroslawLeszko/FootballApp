import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { MatchEntity } from "../types";

export const useGetMatchesQuery = () => {
  const { apiGet } = useApi();
  const { data, isFetching, error } = useQuery({
    queryKey: ["matches"],
    queryFn: async () => {
      return await apiGet<MatchEntity[]>("matches");
    },
  });
  return { data, isFetching, error };
};
