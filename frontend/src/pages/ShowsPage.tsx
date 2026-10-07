import { useState } from "react";
import AddShowForm from "../components/AddShowForm";
import type { Show } from "../types/Show";

function ShowsPage() {
  const [shows, setShows] = useState<Show[]>([]);

  function addShow(showData: Omit<Show, "id">) {
    const newShow = {
      id: Date.now(),
      ...showData,
    };

    setShows((currentShows) => [...currentShows, newShow]);
  }

  return (
    <div>
      <h1>Shows</h1>

      <AddShowForm addShow={addShow} />

      {shows.map((show) => (
        <div key={show.id}>
          <h3>{show.name}</h3>
          <p>Date: {show.date}</p>
          <p>Venue: {show.venue}</p>
          <p>Notes: {show.notes}</p>
        </div>
      ))}
    </div>
  );
}

export default ShowsPage;
