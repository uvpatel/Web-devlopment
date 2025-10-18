import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavigationHeader = () => {
  return (
    <header className="flex justify-between items-center bg-gray-100 px-6 py-3 border-b">
      <SearchBar />
      <nav>
        <Link to="/docs" className="text-blue-600 font-medium hover:underline">
          Docs
        </Link>
      </nav>
    </header>
  );
};

export default NavigationHeader;
