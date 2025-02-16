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
    primary: "#C8D5E5",
    secondary: "#81A4CD",
    delete: "#F17300",
    navigation: "#3e7cb1",
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
