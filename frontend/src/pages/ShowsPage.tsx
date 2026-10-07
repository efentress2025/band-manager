import { useState } from "react";
import AddShowForm from "../components/AddShowForm";
import type { Show } from "../types/Show";
import ShowCard from "../components/ShowCard";

function ShowsPage() {
  const [shows, setShows] = useState<Show[]>([]);

  function addShow(showData: Omit<Show, "id">) {
    const newShow = {
      id: Date.now(),
      ...showData,
    };

    setShows((currentShows) => [...currentShows, newShow]);
  }

  function deleteShow(id: number) {
    setShows((currentShows) => currentShows.filter((show) => show.id !== id));
  }

  return (
    <div>
      <h1>Shows</h1>

      <AddShowForm addShow={addShow} />

      {shows.map((show) => (
        <ShowCard 
          key={show.id}
          show={show}
          deleteShow={deleteShow} 
        />
      ))}
    </div>
  );
}

export default ShowsPage;
