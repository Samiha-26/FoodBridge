import "./Footer.css";
import logo from "../../assets/images/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left */}

        <div className="footer-about">
          <div className="footer-logo">
            <img src={logo} alt="FoodBridge Logo" />

            <h2>FoodBridge</h2>
          </div>

          <p>
            Connecting restaurants with nearby charities to reduce food waste
            and provide meals to communities in need.
          </p>
        </div>

        {/* Links */}

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Contact</a>
        </div>

        {/* Contact */}

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>
            <FaEnvelope /> info@foodbridge.com
          </p>

          <p>
            <FaPhoneAlt /> +880 1712-345678
          </p>

          <p>
            <FaMapMarkerAlt /> Sylhet, Bangladesh
          </p>
        </div>

        {/* Social */}

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="copyright">© 2026 FoodBridge. All Rights Reserved.</div>
    </footer>
  );
}

export default Footer;
