import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/songs">Songs</Link>
      <Link to="/rehearsals">Rehearsals</Link>
      <Link to="/shows">Shows</Link>
    </nav>
  );
}

export default Navbar;