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

  function addSong() {
    const newSong = {
      id: Date.now(),
      title: newSongTitle,
      status: "Writing",
      key: "",
      bpm: 0,
    };

    setSongs([...songs, newSong]);

    setNewSongTitle("");
  }
  
  return (
    <div>
      <h1>Band Manager</h1>

      <h2>Songs</h2>

      <input
        type="text"
        value={newSongTitle}
        onChange={(event) => setNewSongTitle(event.target.value)}
      />

      <p>You're typing: {newSongTitle}</p>

      <button onClick={addSong}>
        Add Song
      </button>

      {songs.map((song) => (
        <div key={song.id}>
          <h3>{song.title}</h3>
          <p>Status: {song.status}</p>
          <p>Key: {song.key}</p>
          <p>BPM: {song.bpm}</p>
        </div>
      ))}
    </div>
  );
}

export default App;