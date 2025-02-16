import { ChangeEvent, FormEvent } from "react";
import { MatchDto } from "../types";
import { useGetTeamQuery } from "../queries/useGetTeamQuery";
import styled from "styled-components";
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

type MatchFormProps = {
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  values: MatchDto;
  isPending: boolean;
};

export const MatchForm = ({
  handleSubmit,
  handleChange,
  values,
  isPending,
}: MatchFormProps) => {
  const { data } = useGetTeamQuery();

  return (
    <InputWrapper>
      <Form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="teamA">Team A</label>
          </div>
          <Select name="teamA" id="teamA" onChange={handleChange}>
            <option value="">Select team</option>
            {data?.map((team) => (
              <option value={[team.name, team.id]} key={team.id}>
                {team.name}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <div>
            <label htmlFor="teamB">Team B</label>
          </div>
          <Select name="teamB" id="teamB" onChange={handleChange}>
            <option value="">Select team</option>
            {data?.map((team) => (
              <option value={[team.name, team.id]} key={team.id}>
                {team.name}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <div>
            <label htmlFor="teamAResult">Team A Result</label>
          </div>
          <Input
            type="number"
            id="teamAResult"
            name="teamAResult"
            min="0"
            value={values.teamAResult}
            onChange={handleChange}
          />
        </div>
        <div>
          <div>
            <label htmlFor="teamBResult">Team B Result</label>
          </div>
          <Input
            type="number"
            id="teamBResult"
            name="teamBResult"
            min="0"
            value={values.teamBResult}
            onChange={handleChange}
          />
        </div>
        <div>
          <div>
            <label htmlFor="timeOfPlay">Time of play</label>
          </div>
          <Input
            type="number"
            id="timeOfPlay"
            name="timeOfPlay"
            min="0"
            value={values.timeOfPlay}
            onChange={handleChange}
          />
        </div>
        <div>
          <div>
            <label htmlFor="date">Date</label>
          </div>
          <Input
            type="date"
            id="date"
            name="date"
            value={values.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <div>
            <label htmlFor="place">Location</label>
          </div>
          <Input
            type="text"
            id="place"
            name="place"
            value={values.place}
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
