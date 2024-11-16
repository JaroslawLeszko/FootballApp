import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Football } from "./Football";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Football />
    </QueryClientProvider>
  );
};
