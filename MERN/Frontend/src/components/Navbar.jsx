import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-semibold">Taskly</h1>
      <div className="flex gap-4">
        <Link to="/register" className="hover:text-blue-400">Register</Link>
        <Link to="/login" className="hover:text-blue-400">Login</Link>
      </div>
    </nav>
  );
}
