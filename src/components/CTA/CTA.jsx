import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Ready to Make a Difference?</h2>

        <p>
          Every meal donated can bring hope to someone in need. Join FoodBridge
          today and help build a community where surplus food never goes to
          waste.
        </p>

        <div className="cta-buttons">
          <button className="primary-btn">Donate Food</button>
          <button className="secondary-btn">Join as Charity</button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
