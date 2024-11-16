import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { MatchDto, MatchEntity } from "../types";

export const useEditMatchMutation = (matchId: string) => {
  const { apiPut } = useApi();
  const queryClient = useQueryClient();
  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["matches", "update", matchId],
    mutationFn: async (payload: MatchDto) => {
      return await apiPut<MatchEntity, MatchDto>(`matches/${matchId}`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["matches"],
      });
    },
  });

  return { mutate, isPending, isSuccess };
};
