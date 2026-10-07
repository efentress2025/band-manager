import { useEffect, useState } from "react";
import AddSongForm from "../components/AddSongForm";
import SongCard from "../components/SongCard";
import type { Song } from "../types/Song";

function SongsPage() {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((response) => response.json())
      .then((data) => {
        setSongs(data);
      });
  }, []);

  function addSong(songData: Omit<Song, "id">) {
    const newSong = {
      id: Date.now(),
      ...songData,
    };

    setSongs((currentSongs) => [...currentSongs, newSong]);
  }

  function deleteSong(id: number) {
    setSongs((currentSongs) => currentSongs.filter((song) => song.id !== id));
  }

  function editSong(id: number) {
    const newTitle = prompt("Enter a new song title:");

    if (!newTitle) {
      return;
    }

    setSongs((currentSongs) =>
      currentSongs.map((song) =>
        song.id === id ? { ...song, title: newTitle } : song,
      ),
    );
  }

  return (
    <div>
      <h1>Songs</h1>

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

export default SongsPage;
