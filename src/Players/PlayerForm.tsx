import { ChangeEvent, FormEvent } from "react";
import { PlayerDto } from "../types/index";
import styled from "styled-components";
import { useGetTeamQuery } from "../queries/useGetTeamQuery";
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

const Select = styled.select`
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.secondary};
  box-sizing: border-box;
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
