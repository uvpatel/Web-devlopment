import React from 'react';
import { Link } from 'react-router-dom'; // for navigation

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#4caf50", color: "white" }}>
      <h2>My React App</h2>
      <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
        <li><Link to="/" style={{ color: "white" }}>Home</Link></li>
        <li><Link to="/about" style={{ color: "white" }}>About</Link></li>
        <li><Link to="/contact" style={{ color: "white" }}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
