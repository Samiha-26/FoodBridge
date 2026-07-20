import "./Impact.css";

function Impact() {
  return (
    <section className="impact">
      <div className="impact-heading">
        <h2>Our Impact</h2>

        <p>
          Together with restaurants and charities, we're reducing food waste and
          delivering hope to communities every day.
        </p>
      </div>

      <div className="impact-stats">
        <div className="impact-item">
          <h3>120+</h3>
          <span>Partner Restaurants</span>
        </div>

        <div className="impact-item">
          <h3>350+</h3>
          <span>Food Donations</span>
        </div>

        <div className="impact-item">
          <h3>12,000+</h3>
          <span>Meals Delivered</span>
        </div>

        <div className="impact-item">
          <h3>45+</h3>
          <span>Partner Charities</span>
        </div>
      </div>
    </section>
  );
}

export default Impact;
