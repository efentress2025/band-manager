type Song = {
  id: number;
  title: string;
  status: string;
  key: string;
  bpm: string;
};

type SongCardProps = {
  song: Song;
  editSong: (id: number) => void;
  deleteSong: (id: number) => void;
};

function SongCard({ song, editSong, deleteSong }: SongCardProps) {
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