import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { MatchDto, MatchEntity } from "../types";

export const useAddMatchMutation = () => {
  const { apiPost } = useApi();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["matches", "create"],
    mutationFn: async (payload: MatchDto) => {
      return await apiPost<MatchEntity, MatchDto>("matches", payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["matches"],
      });
    },
  });
  return { mutate, isPending };
};
