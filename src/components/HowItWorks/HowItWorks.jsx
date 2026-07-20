import "./HowItWorks.css";
import { FaUtensils, FaHandsHelping, FaHeart } from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="how-section">
      <div className="heading">
        <span>HOW IT WORKS</span>

        <h2>
          Three Simple Steps to
          <span> Make a Difference</span>
        </h2>

        <p>
          FoodBridge makes donating surplus food quick, simple, and meaningful.
        </p>
      </div>

      <div className="timeline">
        <div className="step">
          <div className="icon-box">
            <FaUtensils />
          </div>

          <h3>Restaurant Uploads Food</h3>

          <p>
            Restaurants add available surplus food with quantity, pickup time
            and expiry.
          </p>
        </div>

        <div className="connector"></div>

        <div className="step">
          <div className="icon-box">
            <FaHandsHelping />
          </div>

          <h3>Charity Claims Donation</h3>

          <p>
            Nearby charities instantly reserve available food through
            FoodBridge.
          </p>
        </div>

        <div className="connector"></div>

        <div className="step">
          <div className="icon-box">
            <FaHeart />
          </div>

          <h3>Meals Reach People</h3>

          <p>
            Fresh meals are delivered before expiration, reducing waste and
            helping communities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
