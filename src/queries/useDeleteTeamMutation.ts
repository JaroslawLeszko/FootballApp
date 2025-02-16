import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { TeamEntity } from "../types";

export const useDeleteTeamMutation = (teamId: string) => {
  const { apiDelete } = useApi();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["teams", teamId],
    mutationFn: async () => {
      return await apiDelete<TeamEntity>(`teams/${teamId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["teams"],
      });
    },
  });
  return { mutate, isPending };
};
