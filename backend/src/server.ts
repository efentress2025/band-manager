import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
