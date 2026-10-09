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
    fetch("http://localhost:3000/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(songData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add song");
        }

        return response.json();
      })
      .then((newSong: Song) => {
        setSongs((currentSongs) => [...currentSongs, newSong]);
      })
      .catch((error) => {
        console.error("Error adding song:", error);
      });
  }

  function deleteSong(id: number) {
    fetch(`http://localhost:3000/songs/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete song");
        }

        setSongs((currentSongs) =>
          currentSongs.filter((song) => song.id !== id),
        );
      })
      .catch((error) => {
        console.error("Error deleting song:", error);
      });
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
