import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { PlayerDto, PlayerEntity } from "../types";

export const useEditPlayerMutation = (playerId: string) => {
  const { apiPut } = useApi();
  const queryQlient = useQueryClient();
  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["players", "update", playerId],
    mutationFn: async (payload: PlayerDto) => {
      return await apiPut<PlayerEntity, PlayerDto>(
        `players/${playerId}`,
        payload,
      );
    },
    onSuccess: () => {
      queryQlient.invalidateQueries({
        queryKey: ["players"],
      });
    },
  });

  return { mutate, isPending, isSuccess };
};
