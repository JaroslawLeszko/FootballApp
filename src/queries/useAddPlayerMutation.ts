import { useMutation } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { PlayerDto, PlayerEntity } from "../types";

export const useAddPlayerMutation = () => {
  const { apiPost } = useApi();
  const { mutate, isPending } = useMutation({
    mutationKey: ["players"],
    mutationFn: async (payload: PlayerDto) => {
      return await apiPost<PlayerEntity, PlayerDto>("players", payload);
    },
  });
  return { mutate, isPending };
};
