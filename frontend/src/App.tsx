import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import SongsPage from "./pages/SongsPage";
import RehearsalsPage from "./pages/RehearsalsPage";
import ShowsPage from "./pages/ShowsPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/songs" element={<SongsPage />} />
        <Route path="/rehearsals" element={<RehearsalsPage />} />
        <Route path="/shows" element={<ShowsPage />} />
      </Routes>
    </>
  );
}

export default App;