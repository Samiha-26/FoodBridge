import "./Hero.css";
import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-tag">🌿 Share Food. Share Hope.</div>

        <h1>
          Connecting <span>Restaurants</span>
          <br />
          with Nearby <span>Charities</span>
        </h1>

        <p>
          Help reduce food waste by allowing restaurants to donate surplus meals
          before they expire. Nearby charities can instantly claim donations and
          deliver meals to people in need through FoodBridge.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Donate Food</button>

          <button className="secondary-btn">Find Donations</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image-box">
          <img src={heroImage} alt="FoodBridge Hero" />
        </div>

        <div className="floating-card card1">
          <h2>120+</h2>

          <span>Partner Restaurants</span>
        </div>

        <div className="floating-card card2">
          <h2>350+</h2>

          <span>Food Donations</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
