import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-header">

        <span>CONTACT US</span>

        <h1>Get In Touch</h1>

        <p>
          We'd love to hear from you. Whether you have questions,
          suggestions, or want to collaborate, we're here to help.
        </p>

      </div>

      <div className="contact-wrapper">

        {/* Left Card */}

        <div className="contact-info">

          <h2>Contact Information</h2>

          <div className="info-item">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>support@foodbridge.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <p>+880 1234 567890</p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <div>
              <h4>Address</h4>
              <p>Sylhet, Bangladesh</p>
            </div>
          </div>

          <div className="info-item">
            <FaClock />
            <div>
              <h4>Office Hours</h4>
              <p>9:00 AM - 6:00 PM</p>
            </div>
          </div>

        </div>

        {/* Right Form */}

        <div className="contact-form">

          <h2>Send a Message</h2>

          <form>

            <input type="text" placeholder="Full Name" />

            <input type="email" placeholder="Email Address" />

            <input type="text" placeholder="Subject" />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;