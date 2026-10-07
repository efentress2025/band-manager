import type { Show } from "../types/Show";

type ShowCardProps = {
  show: Show;
  deleteShow: (id: number) => void;
};

function ShowCard({ show, deleteShow }: ShowCardProps) {
  return (
    <div>
      <h3>{show.name}</h3>
      <p>Date: {show.date}</p>
      <p>Venue: {show.venue}</p>
      <p>Notes: {show.notes}</p>

      <button onClick={() => deleteShow(show.id)}>Delete</button>
    </div>
  );
}

export default ShowCard;
