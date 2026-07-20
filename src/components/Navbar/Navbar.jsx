import "./Navbar.css";

import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="FoodBridge Logo" />

          <h2>
            Food<span>Bridge</span>
          </h2>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Donate</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="buttons">
          <button className="login">Login</button>

          <button className="register">Register</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
