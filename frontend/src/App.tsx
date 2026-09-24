import { useState } from "react";
import SongCard from "./components/SongCard";
import AddSongForm from "./components/AddSongForm";

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

  function addSong(songData) {
    const newSong = {
      id: Date.now(),
      ...songData,
    };

    setSongs([...songs, newSong]);
  }

  function deleteSong(id) {
    const updatedSongs = songs.filter((song) => song.id !== id);

    setSongs(updatedSongs);
  }

  function editSong(id) {
    const newTitle = prompt("Enter a new song title:");

    const updatedSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          title: newTitle,
        };
      }

      return song;
    });

    setSongs(updatedSongs);
  }
  
  return (
    <div>
      <h1>Band Manager</h1>

      <h2>Songs</h2>

      <AddSongForm addSong={addSong} />

      {songs.map((song) => (
        <SongCard
          key={song.id}
          song={song}
          editSong={editSong}
          deleteSong={deleteSong}
        />
      ))}
    </div>
  );
}

export default App;