function SongCard({ song, editSong, deleteSong }) {
  return (
    <div>
      <h3>{song.title}</h3>
      <p>Status: {song.status}</p>
      <p>Key: {song.key}</p>
      <p>BPM: {song.bpm}</p>

      <button onClick={() => editSong(song.id)}>
        Edit
      </button>

      <button onClick={() => deleteSong(song.id)}>
        Delete
      </button>
    </div>
  );
}

export default SongCard;