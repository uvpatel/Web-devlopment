import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Career Conqure</h1>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/career-advice">Career Advice</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar