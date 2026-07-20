import "./Features.css";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";

function Features() {
  return (
    <section className="features">
      <h2>Why Choose FoodBridge</h2>

      <p>
        Our platform makes food donation simple, fast, and reliable for
        restaurants and charities.
      </p>

      <div className="feature-grid">
        <div className="feature-card">
          <FaMapMarkerAlt className="feature-icon" />
          <h3>Nearby Matching</h3>
          <p>
            Connect restaurants with nearby charities to reduce travel time.
          </p>
        </div>

        <div className="feature-card">
          <FaClock className="feature-icon" />
          <h3>Expiration Tracking</h3>
          <p>Every donation includes an expiry time to ensure food safety.</p>
        </div>

        <div className="feature-card">
          <FaShieldAlt className="feature-icon" />
          <h3>Secure Platform</h3>
          <p>Login securely and manage donations with confidence.</p>
        </div>

        <div className="feature-card">
          <FaLeaf className="feature-icon" />
          <h3>Reduce Food Waste</h3>
          <p>
            Help protect the environment while supporting local communities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
