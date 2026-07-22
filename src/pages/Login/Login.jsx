import "./Login.css";
import loginImg from "../../assets/images/login.jpg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login-page">

      <div className="login-card">

        <div className="login-image">

          <img src={loginImg} alt="Login Illustration" />

        </div>

        <div className="login-content">

          <span>WELCOME BACK</span>

          <h1>Login to FoodBridge</h1>

          <p>
            Continue your journey to reduce food waste and help your community.
          </p>

          <form>

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <div className="login-options">

              <label>

                <input type="checkbox" />

                Remember Me

              </label>

              <a href="#">Forgot Password?</a>

            </div>

            <button>

              Login

            </button>

          </form>

          <p className="register-text">

            Don't have an account?

            <Link to="/register"> Register</Link>

          </p>

        </div>

      </div>

    </section>
  );
}

export default Login;