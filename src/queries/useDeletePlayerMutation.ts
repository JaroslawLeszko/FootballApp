import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { PlayerEntity } from "../types";

export const useDeletePlayerMutation = (playerId: string) => {
  const { apiDelete } = useApi();
  const queryQlient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["players", playerId],
    mutationFn: async () => {
      return await apiDelete<PlayerEntity>(`players/${playerId}`);
    },
    onSuccess: () => {
      queryQlient.invalidateQueries({
        queryKey: ["players"],
      });
    },
  });
  return { mutate, isPending };
};
