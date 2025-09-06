import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/sambhav-logo.png"; // ✅ corrected path (relative to components/Navbar)

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Sambhav 3.0 Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/" className="nav-blue">HOME</Link></li>
        <li><Link to="/about" className="nav-orange">ABOUT</Link></li>
        <li><Link to="/events" className="nav-blue">EVENTS</Link></li>
        <li><Link to="/leaderboard" className="nav-orange">LEADERBOARD</Link></li>
        <li><Link to="/faq" className="nav-blue">FAQ</Link></li>
        <li><Link to="/contact" className="nav-orange">CONTACT</Link></li>
      </ul>
    </nav>
  );
}
