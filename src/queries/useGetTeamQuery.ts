import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { TeamEntity } from "../types";

export const useGetTeamQuery = () => {
  const { apiGet } = useApi();
  const { data, isFetching } = useQuery({
    queryKey: ["teams"],
    queryFn: async () => {
      return await apiGet<TeamEntity[]>("teams");
    },
  });
  return {
    data,
    isFetching,
  };
};
