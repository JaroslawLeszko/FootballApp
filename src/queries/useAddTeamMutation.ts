import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { TeamDto, TeamEntity } from "../types";

export const useAddTeamMutation = () => {
  const { apiPost } = useApi();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["teams", "create"],
    mutationFn: async (payload: TeamDto) => {
      return await apiPost<TeamEntity, TeamDto>("teams", payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["teams"],
      });
    },
  });
  return { mutate, isPending };
};
