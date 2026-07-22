import "./About.css";
import aboutImg from "../../assets/images/about.jpg";

function About() {
  return (
    <section className="about">

      {/* Hero */}
      <div className="about-hero">

        <span>ABOUT FOODBRIDGE</span>

        <h1>
          Connecting Surplus Food
          <br />
          <span>With Hope</span>
        </h1>

        <p>
          FoodBridge is a community-driven platform that connects restaurants
          with nearby charities to reduce food waste and ensure surplus food
          reaches people who need it the most.
        </p>

      </div>

      {/* Story */}

      <div className="story">

        <div className="story-image">

          <img src={aboutImg} alt="Food Donation" />

        </div>

        <div className="story-text">

          <h2>Our Story</h2>

          <p>
            Every day, restaurants prepare fresh meals, but not all of them are
            sold. At the same time, many people struggle to find enough food.
            FoodBridge was created to connect these two realities by making food
            donation simple, fast, and meaningful.
          </p>

          <p>
            Our platform allows restaurants to list surplus food while nearby
            charities can easily discover and collect it. This reduces food
            waste and supports communities in need.
          </p>

        </div>

      </div>

      {/* Values */}

      <div className="values">

        <h2>Our Core Values</h2>

        <div className="value-cards">

          <div className="value-card">

            <div className="icon">🌱</div>

            <h3>Reduce Waste</h3>

            <p>
              Prevent perfectly good food from ending up in landfills.
            </p>

          </div>

          <div className="value-card">

            <div className="icon">❤️</div>

            <h3>Help Communities</h3>

            <p>
              Support local charities by providing food to people in need.
            </p>

          </div>

          <div className="value-card">

            <div className="icon">🌍</div>

            <h3>Sustainability</h3>

            <p>
              Build a smarter and greener food-sharing ecosystem.
            </p>

          </div>

        </div>

      </div>

      {/* Mission Vision */}

      <div className="mission-section">

        <div className="mission-box">

          <h2>Our Mission</h2>

          <p>
            To minimize food waste by creating a reliable connection between
            restaurants and charities through technology.
          </p>

        </div>

        <div className="vision-box">

          <h2>Our Vision</h2>

          <p>
            A future where no edible food goes to waste and every community has
            access to nutritious meals.
          </p>

        </div>

      </div>

      {/* Quote */}

      <div className="quote">

        <h2>

          “Together, we can turn surplus food into hope.”

        </h2>

      </div>

    </section>
  );
}

export default About;