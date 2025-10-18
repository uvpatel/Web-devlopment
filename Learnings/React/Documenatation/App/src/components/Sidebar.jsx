import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-50 border-r p-4">
      <h2 className="font-bold mb-4">Navigation</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/docs" className="hover:text-blue-600">
            Docs
          </Link>
        </li>
      </ul>
    </aside>
  );
};
