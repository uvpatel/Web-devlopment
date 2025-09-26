// import { Link } from "react-router-dom";

// const Navbar = ({ onOpen }) => (
//   <nav className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
//     <button onClick={onOpen} className="p-2 bg-gray-700 rounded hover:bg-gray-600">
//       ☰
//     </button>
//     <h1 className="text-xl font-bold text-left">Smart Tourist Safety</h1>
//     <ul className="flex space-x-6">
//       <li><Link to="#Home" className="hover:text-gray-400">Digital ID</Link></li>
//       <li><Link to="#About" className="hover:text-gray-400">Mobile App</Link></li>
//       <li><Link to="/ai-anomaly" className="hover:text-gray-400">AI Anomaly</Link></li>
//       <li><Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link></li>
      
//     </ul>
//   </nav>
// );
// export default Navbar;

import { FiMenu } from "react-icons/fi";

const Navbar = ({ onOpen, title = "Smart Tourist Safety" }) => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
      {/* Sidebar toggle */}
      <button 
        onClick={onOpen} 
        aria-label="Open sidebar"
        className="p-2 bg-gray-700 rounded hover:bg-gray-600"
      >
        <FiMenu size={20} />
      </button>

      {/* Title - can be dynamic per page if passed via props */}
      <h1 className="text-xl font-bold">{title}</h1>

      {/* Right side actions (keeps it generic) */}
      <div className="flex space-x-4">
        <button className="hover:text-gray-400">🔔</button>
        <button className="hover:text-gray-400">👤</button>
      </div>
    </nav>
  );
};

export default Navbar;
