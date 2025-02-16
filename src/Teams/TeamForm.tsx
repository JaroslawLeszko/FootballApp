import { ChangeEvent, FormEvent } from "react";
import { TeamDto } from "../types";
import styled from "styled-components";
import { commonButton } from "../Helpers/commonButton";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: left;
`;

const Form = styled.form`
  margin-top: 20px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.secondary};
  box-sizing: border-box;
`;

const SaveButton = styled.button`
  ${commonButton}
  margin: 0;
  margin-top: 5px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  &:hover {
    background: linear-gradient(90deg, #a6bedb, #5c8abf);
  }
  box-sizing: border-box;
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
    <InputWrapper>
      <p>
        <strong>ADD TEAM</strong>
      </p>
      <Form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <Input
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
          <Input
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
          <Input
            type="number"
            id="yearOfFoundation"
            name="yearOfFoundation"
            min="0"
            value={values.yearOfFoundation}
            onChange={handleChange}
          />
        </div>
        <SaveButton type="submit" disabled={isPending}>
          Save
        </SaveButton>
      </Form>
    </InputWrapper>
  );
};
