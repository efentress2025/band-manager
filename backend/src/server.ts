import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

const songs = [
  {
    id: 1,
    title: "Corset",
    status: "Finished",
    key: "Em",
    bpm: "120",
  },
  {
    id: 2,
    title: "Surfeit",
    status: "Writing",
    key: "E",
    bpm: "140",
  },
];

app.get("/", (req, res) => {
  res.send("Band Manager API is running!");
});

app.get("/songs", (req, res) => {
  res.json(songs);
});

app.post("/songs", (req, res) => {
  const newSong = {
    id: Date.now(),
    ...req.body,
  };

  songs.push(newSong);

  res.status(201).json(newSong);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
