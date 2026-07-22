import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="notfound">

      <div className="notfound-card">

        <div className="emoji">
          🌱
        </div>

        <h1>404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you are looking for doesn't exist or may have been moved.
        </p>

        <Link to="/">
          <button>
            Back to Home
          </button>
        </Link>

      </div>

    </section>
  );
}

export default NotFound;