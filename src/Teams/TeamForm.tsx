import { ChangeEvent, FormEvent } from "react";
import { TeamDto } from "../types";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
`;

type TeamFormProps = {
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  values: TeamDto;
  isPending: boolean;
};

export const TeamForm = ({
  handleSubmit,
  handleChange,
  values,
  isPending,
}: TeamFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="name">Name</label>
        </div>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>
          <label htmlFor="localization">Localization</label>
        </div>
        <input
          type="text"
          id="localization"
          name="localization"
          value={values.localization}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>
          <label htmlFor="yearOfFoundation">Year of foundation</label>
        </div>
        <input
          type="number"
          id="yearOfFoundation"
          name="yearOfFoundation"
          value={values.yearOfFoundation}
          onChange={handleChange}
        />
      </div>
      <StyledButton type="submit" disabled={isPending}>
        Save
      </StyledButton>
    </form>
  );
};
