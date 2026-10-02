import { useState } from "react";
import AddRehearsalForm from "../components/AddRehearsalForm";
import type { Rehearsal } from "../types/Rehearsal";
import RehearsalCard from "../components/RehearsalCard";

function RehearsalsPage() {
  const [rehearsals, setRehearsals] = useState<Rehearsal[]>([]);

  function addRehearsal(rehearsalData: Omit<Rehearsal, "id">) {
    const newRehearsal = {
      id: Date.now(),
      ...rehearsalData,
    };

    setRehearsals((currentRehearsals) => [...currentRehearsals, newRehearsal]);
  }

  function deleteRehearsal(id: number) {
    setRehearsals((currentRehearsals) =>
      currentRehearsals.filter((rehearsal) => rehearsal.id !== id),
    );
  }

  return (
    <div>
      <h1>Rehearsals</h1>

      <AddRehearsalForm addRehearsal={addRehearsal} />

      {rehearsals.map((rehearsal) => (
        <RehearsalCard
          key={rehearsal.id}
          rehearsal={rehearsal}
          deleteRehearsal={deleteRehearsal}
        />
      ))}
    </div>
  );
}

export default RehearsalsPage;
