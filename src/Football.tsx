import { useState } from "react";
import { Nav } from "./Nav";
import { Players } from "./Players/Players";
import { Teams } from "./Teams/Teams";
import { Matches } from "./Matches/Matches";
import { Statistics } from "./Statistics/Statistics";
import { ViewType } from "./types";
import styled from "styled-components";

const Container = styled.div`
  width: auto;
  justify-content: center;
  align-items: center;
`;

export const Football = () => {
  const [view, setView] = useState<ViewType>("players");

  const handleBookmark = (value: string) => {
    setView(value as ViewType);
  };

  return (
    <>
      <Container>
        <h1>FOOTBALL APP</h1>
        <Nav onBookmarkSelect={handleBookmark} />
        {view === "players" && <Players />}
        {view === "teams" && <Teams />}
        {view === "matches" && <Matches />}
        {view === "statistics" && <Statistics />}
      </Container>
    </>
  );
};
