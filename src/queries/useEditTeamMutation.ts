import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { TeamDto, TeamEntity } from "../types";

export const useEditTeamMutation = (teamId: string) => {
  const { apiPut } = useApi();
  const queryClient = useQueryClient();
  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["teams", "update", teamId],
    mutationFn: async (payload: TeamDto) => {
      return await apiPut<TeamEntity, TeamDto>(`teams/${teamId}`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["teams"],
      });
    },
  });

  return { mutate, isPending, isSuccess };
};
