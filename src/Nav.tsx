import styled from "styled-components";
import { ViewType } from "./types";
import { commonButton } from "./Helpers/commonButton";

const Navbar = styled.div`
  display: grid-row;
  justify-content: left;
  background: ${(props) => props.theme.colors.navigation};
`;

const Bookmark = styled.button`
  ${commonButton}
  background-color: ${(props) => props.theme.colors.navigation};
  color: ${(props) => props.theme.colors.secondary};
  &:hover {
    background: ${(props) => props.theme.colors.secondary};
    color: black;
  }
  min-width: 100px;
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
      <Navbar>
        <Bookmark onClick={handleChange} name="players" value="players">
          PLAYERS
        </Bookmark>
        <Bookmark onClick={handleChange} name="teams" value="teams">
          TEAMS
        </Bookmark>
        <Bookmark onClick={handleChange} name="matches" value="matches">
          MATCHES
        </Bookmark>
        <Bookmark onClick={handleChange} name="statistics" value="statistics">
          STATISTICS
        </Bookmark>
      </Navbar>
    </>
  );
};
