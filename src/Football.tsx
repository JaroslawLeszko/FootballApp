import { useState } from "react";
import { Nav } from "./Nav";
import { Players } from "./Players";
import { Teams } from "./Teams";
import { Matches } from "./Matches";
import { Statistics } from "./Statistics";
import { ViewType } from "./types";

export const Football = () => {
  const [view, setView] = useState<ViewType>("teams");

  const handleBookmark = (value: string) => {
    setView(value as ViewType);
  };

  return (
    <>
      <h1>Football App</h1>
      <Nav onBookmarkSelect={handleBookmark} />
      {view === "players" && <Players />}
      {view === "teams" && <Teams />}
      {view === "matches" && <Matches />}
      {view === "statistics" && <Statistics />}
    </>
  );
};
