import { ChangeEvent, FormEvent } from "react";
import { PlayerDto } from "../types/index";
import styled from "styled-components";
import { useGetTeamQuery } from "../queries/useGetTeamQuery";
import {
  commonForm,
  commonInput,
  commonInputWrapper,
  commonSaveButton,
  commonSelect,
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

const Select = styled.select`
  ${commonSelect}
  background-color: ${(props) => props.theme.colors.secondary};
`;

type PlayerFormProps = {
  handleSubmit: (e: FormEvent) => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) => void;
  values: PlayerDto;
  isPending: boolean;
};

export const PlayerForm = ({
  handleSubmit,
  handleChange,
  values,
  isPending,
}: PlayerFormProps) => {
  const { data } = useGetTeamQuery();
  if (!data) return;
  return (
    <InputWrapper>
      <p>
        <strong>ADD PLAYER</strong>
      </p>
      <Form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="firstName">First name</label>
          </div>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <div>
            <label htmlFor="lastName">Last Name</label>
          </div>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <div>
            <label htmlFor="team">Team</label>
          </div>
          <Select
            name="teamId"
            id=""
            value={values.teamId || ""}
            onChange={handleChange}
          >
            <option value="">none</option>
            {data.map((team) => (
              <option value={team.id} key={team.id}>
                {team.name}
              </option>
            ))}
          </Select>
        </div>

        <SaveButton type="submit" disabled={isPending}>
          Save
        </SaveButton>
      </Form>
    </InputWrapper>
  );
};
