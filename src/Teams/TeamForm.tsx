import { ChangeEvent, FormEvent } from "react";
import { TeamDto } from "../types";
import styled from "styled-components";
import {
  commonForm,
  commonInput,
  commonInputWrapper,
  commonSaveButton,
} from "../Helpers/commonElements";

const InputWrapper = styled.div`
  ${commonInputWrapper}
`;

const Form = styled.form`
  ${commonForm}
`;

const Input = styled.input`
  ${commonInput}
  background-color: ${(props) => props.theme.colors.secondary};
`;

const SaveButton = styled.button`
  ${commonSaveButton}
  background-color: ${(props) => props.theme.colors.secondary};
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
