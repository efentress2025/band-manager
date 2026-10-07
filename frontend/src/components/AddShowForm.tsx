import { useState } from "react";
import type { Show } from "../types/Show";

type AddShowFormProps = {
  addShow: (showData: Omit<Show, "id">) => void;
};

function AddShowForm({ addShow }: AddShowFormProps) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(
    event: React.SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) {
    event.preventDefault();

    addShow({
      name,
      date,
      venue,
      notes,
    });

    setName("");
    setDate("");
    setVenue("");
    setNotes("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Show name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />

      <input
        type="text"
        placeholder="Venue"
        value={venue}
        onChange={(event) => setVenue(event.target.value)}
      />

      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
      />

      <button type="submit">Add Show</button>
    </form>
  );
}

export default AddShowForm;
