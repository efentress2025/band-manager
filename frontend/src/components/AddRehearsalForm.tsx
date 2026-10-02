import { useState } from "react";
import type { Rehearsal } from "../types/Rehearsal";

type AddRehearsalFormProps = {
  addRehearsal: (rehearsalData: Omit<Rehearsal, "id">) => void;
};

function AddRehearsalForm({ addRehearsal }: AddRehearsalFormProps) {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement, SubmitEvent>,) {
    event.preventDefault();

    addRehearsal({
      date: date,
      location: location,
      notes: notes,
    });

    setDate("");
    setLocation("");
    setNotes("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />

      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
      />

      <button type="submit">Add Rehearsal</button>
    </form>
  );
}

export default AddRehearsalForm;
