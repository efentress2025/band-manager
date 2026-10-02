import type { Rehearsal } from "../types/Rehearsal";

type RehearsalCardProps = {
  rehearsal: Rehearsal;
  deleteRehearsal: (id: number) => void;
};

function RehearsalCard({ rehearsal, deleteRehearsal }: RehearsalCardProps) {
  return (
    <div>
      <h3>{rehearsal.date}</h3>
      <p>Location: {rehearsal.location}</p>
      <p>Notes: {rehearsal.notes}</p>

      <button onClick={() => deleteRehearsal(rehearsal.id)}>Delete</button>
    </div>
  );
}

export default RehearsalCard;
