import "./Register.css";
import { Link } from "react-router-dom";
import registerImage from "../../assets/images/register.jpg";

function Register() {
  return (
    <section className="register-page">
      <div className="register-container">

        {/* Left Side */}
        <div className="register-left">
          <img src={registerImage} alt="Register Illustration" />

          <h2>Join FoodBridge</h2>

          <p>
            Become a part of our mission to reduce food waste and help
            communities. Register as a <strong>Restaurant</strong> or{" "}
            <strong>Charity</strong> and start making a difference today.
          </p>
        </div>

        {/* Right Side */}
        <div className="register-right">

          <span>CREATE ACCOUNT</span>

          <h1>Register</h1>

          <p>
            Fill in your details below to create your FoodBridge account.
          </p>

          <form>

            <input
              type="text"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              type="password"
              placeholder="Password"
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              required
            />

            <select required>
              <option value="">Select Role</option>
              <option value="restaurant">Restaurant</option>
              <option value="charity">Charity</option>
            </select>

            <button type="submit">
              Register
            </button>

          </form>

          <div className="login-link">
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Register;