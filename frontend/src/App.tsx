import { useState } from "react";

function App() {
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: "test1",
      status: "Released",
      key: "E Minor",
      bpm: 135,
    },
    {
      id: 2,
      title: "test2",
      status: "Writing",
      key: "E Major",
      bpm: 120,
    },
  ]);

  const [newSongTitle, setNewSongTitle] = useState("");
  const [newSongStatus, setNewSongStatus] = useState("Writing");
  const [newSongKey, setNewSongKey] = useState("");
  const [newSongBpm, setNewSongBpm] = useState("");

  function addSong() {
    const newSong = {
      id: Date.now(),
      title: newSongTitle,
      status: newSongStatus,
      key: newSongKey,
      bpm: newSongBpm,
    };

    setSongs([...songs, newSong]);

    setNewSongTitle("");
    setNewSongStatus("Writing");
    setNewSongKey("");
    setNewSongBpm("");
  }

  function deleteSong(id) {
    const updatedSongs = songs.filter((song) => song.id !== id);

    setSongs(updatedSongs);
  }
  
  return (
    <div>
      <h1>Band Manager</h1>

      <h2>Songs</h2>

      <input
        type="text"
        placeholder="Song title"
        value={newSongTitle}
        onChange={(event) => setNewSongTitle(event.target.value)}
      />

      <select
        value={newSongStatus}
        onChange={(event) => setNewSongStatus(event.target.value)}
      >
        <option value="Writing">Writing</option>
        <option value="Rehearsing">Rehearsing</option>
        <option value="Recording">Recording</option>
        <option value="Released">Released</option>
      </select>

      <input
        type="text"
        placeholder="Key"
        value={newSongKey}
        onChange={(event) => setNewSongKey(event.target.value)}
      />

      <input
        type="number"
        placeholder="BPM"
        value={newSongBpm}
        onChange={(event) => setNewSongBpm(event.target.value)}
      />

      <button onClick={addSong}>
        Add Song
      </button>

      {songs.map((song) => (
        <div key={song.id}>
          <h3>{song.title}</h3>
          <p>Status: {song.status}</p>
          <p>Key: {song.key}</p>
          <p>BPM: {song.bpm}</p>

          <button onClick={() => deleteSong(song.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;