import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20 px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">
        Hire<span className="text-cyan-400">Hub</span>
      </h1>

      <div className="space-x-5">
        <Link
          to="/"
          className="text-gray-300 hover:text-white transition"
        >
          Register
        </Link>

        <Link
          to="/login"
          className="text-gray-300 hover:text-white transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;