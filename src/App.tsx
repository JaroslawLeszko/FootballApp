import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Football } from "./Football";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.primary};
    font-family: 'Tahoma';
  }

`;

const theme = {
  colors: {
    primary: "#C1CFDA",
    secondary: "#20A4F3",
    delete: "#BC243B",
  },
};

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Football />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
