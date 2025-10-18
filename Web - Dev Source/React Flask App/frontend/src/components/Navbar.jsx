import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-3">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-blue-600 flex items-center gap-2">
          <i className="fas fa-compass text-pink-500" aria-hidden="true"></i>
          Career Compass
        </NavLink>

        {/* Links */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition duration-200 ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/chatbot"
            className={({ isActive }) =>
              `font-medium transition duration-200 ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              }`
            }
          >
            AI Advisor
          </NavLink>

          <NavLink
            to="/resume-analyser"
            className={({ isActive }) =>
              `font-medium transition duration-200 ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              }`
            }
          >
            Resume Analyzer
          </NavLink>

          <NavLink
            to="/skill-assessments"
            className={({ isActive }) =>
              `font-medium transition duration-200 ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              }`
            }
          >
            Skill Assessment
          </NavLink>

          <NavLink
            to="/roadmap"
            className={({ isActive }) =>
              `font-medium transition duration-200 ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              }`
            }
          >
            Roadmap
          </NavLink>

          <NavLink
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Authentication
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="text-2xl md:hidden cursor-pointer">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
