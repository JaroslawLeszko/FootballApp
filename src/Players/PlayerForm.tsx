import { ChangeEvent, FormEvent } from "react";
import { PlayerDto } from "../types/index";

type PlayerFormProps = {
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  values: PlayerDto;
  isPending: boolean;
};

export const PlayerForm = ({
  handleSubmit,
  handleChange,
  values,
  isPending,
}: PlayerFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="firstName">First name</label>
        </div>
        <input
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
        <input
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
        <input
          type="text"
          id="teamId"
          name="teamId"
          value={values.teamId}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={isPending}>
        Save
      </button>
    </form>
  );
};
