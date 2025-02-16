import { ChangeEvent, FormEvent } from "react";
import { MatchDto } from "../types";
import { useGetTeamQuery } from "../queries/useGetTeamQuery";
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

const Select = styled.select`
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.secondary};
  box-sizing: border-box;
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
