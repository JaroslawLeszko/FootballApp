import { ChangeEvent, FormEvent } from "react";
import { MatchDto } from "../types";
import { useGetTeamQuery } from "../queries/useGetTeamQuery";

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
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="teamA">Team A</label>
        </div>
        <select name="teamA" id="teamA" onChange={handleChange}>
          <option value="">Select team</option>
          {data?.map((team) => (
            <option value={[team.name, team.id]} key={team.id}>
              {team.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div>
          <label htmlFor="teamB">Team B</label>
        </div>
        <select name="teamB" id="teamB" onChange={handleChange}>
          <option value="">Select team</option>
          {data?.map((team) => (
            <option value={[team.name, team.id]} key={team.id}>
              {team.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div>
          <label htmlFor="teamAResult">Team A Result</label>
        </div>
        <input
          type="number"
          id="teamAResult"
          name="teamAResult"
          value={values.teamAResult}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>
          <label htmlFor="teamBResult">Team B Result</label>
        </div>
        <input
          type="number"
          id="teamBResult"
          name="teamBResult"
          value={values.teamBResult}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>
          <label htmlFor="timeOfPlay">Time of play</label>
        </div>
        <input
          type="text"
          id="timeOfPlay"
          name="timeOfPlay"
          value={values.timeOfPlay}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>
          <label htmlFor="date">Date</label>
        </div>
        <input
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
        <input
          type="text"
          id="place"
          name="place"
          value={values.place}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={isPending}>
        Save
      </button>
    </form>
  );
};
