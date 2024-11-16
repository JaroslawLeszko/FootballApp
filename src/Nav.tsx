import styled from "styled-components";
import { ViewType } from "./types";

const Bookmark = styled.button`
  margin: 5px;
`;

type NavProps = {
  onBookmarkSelect: (value: ViewType) => void;
};

export const Nav = ({ onBookmarkSelect }: NavProps) => {
  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    onBookmarkSelect(value as ViewType);
  };
  return (
    <>
      <div>
        <Bookmark onClick={handleChange} name="players" value="players">
          Players
        </Bookmark>
        <Bookmark onClick={handleChange} name="teams" value="teams">
          Teams
        </Bookmark>
        <Bookmark onClick={handleChange} name="matches" value="matches">
          Matches
        </Bookmark>
        <Bookmark onClick={handleChange} name="statistics" value="statistics">
          Statistics
        </Bookmark>
      </div>
    </>
  );
};
