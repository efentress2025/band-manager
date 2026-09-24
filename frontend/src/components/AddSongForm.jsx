import { useState } from "react";

function AddSongForm({ addSong }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Writing");
  const [key, setKey] = useState("");
  const [bpm, setBpm] = useState("");

  function handleAddSong() {
    addSong({
        title,
        status,
        key,
        bpm,
    });

    setTitle("");
    setStatus("Writing");
    setKey("");
    setBpm("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Song title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <select
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >
        <option value="Writing">Writing</option>
        <option value="Rehearsing">Rehearsing</option>
        <option value="Recording">Recording</option>
        <option value="Released">Released</option>
      </select>

      <input
        type="text"
        placeholder="Key"
        value={key}
        onChange={(event) => setKey(event.target.value)}
      />

      <input
        type="number"
        placeholder="BPM"
        value={bpm}
        onChange={(event) => setBpm(event.target.value)}
      />

      <button onClick={handleAddSong}>
        Add Song
      </button>
    </div>
  );
}

export default AddSongForm;