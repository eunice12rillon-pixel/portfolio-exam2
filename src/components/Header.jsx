import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-linear-to-r from-[#b32a20] to-[#2c0b09] text-white shadow-lg font-mono">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            Eunice
          </Link>

          <div className="flex gap-8">
            <Link
              to="/"
              className="font-mono hover:bg-amber-950 border py-1 px-3 rounded-2xl"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-mono hover:bg-amber-950 border py-1 px-3 rounded-2xl"
            >
              About
            </Link>
            <Link
              to="/skills"
              className="font-mono hover:bg-amber-950 border py-1 px-3 rounded-2xl"
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className="font-mono hover:bg-amber-950 border py-1 px-3 rounded-2xl"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="font-mono hover:bg-amber-950 border py-1 px-3 rounded-2xl"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
