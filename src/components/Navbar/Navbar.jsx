import { NavLink } from "react-router-dom";
import "./Navbar.css";

import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="FoodBridge Logo" />

          <h2>
            Food<span>Bridge</span>
          </h2>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        {/* Buttons */}
        <div className="buttons">
          <NavLink to="/login">
            <button className="login">Login</button>
          </NavLink>

          <NavLink to="/register">
            <button className="register">Register</button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
