import "./Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const whatsappNumber = "918872154985";

  const whatsappMessage =
    "Hello Jaipuri Collections, I'd like to enquire about your products.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <footer className="footer">
      {/* Contact */}
      <div className="footer-section">
        <h4>CONTACT</h4>

        <div className="footer-contact">
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Gurugram, Haryana</span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>hello@jaipuricollections.com</span>
          </div>
        </div>
      </div>

      {/* Follow Us */}
      <div className="footer-section">
        <h4>FOLLOW US</h4>

        <div className="social-links">
          <a href="#">
            <FaInstagram />
            <span>Instagram</span>
          </a>

          <a href="#">
            <FaFacebookF />
            <span>Facebook</span>
          </a>
        </div>
      </div>

      {/* Customer Care */}
      <div className="footer-section">
        <h4>CUSTOMER CARE</h4>

        <div className="footer-links">
          <a href="#">Shipping Policy</a>
          <a href="#">Returns & Exchange</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>

      {/* WhatsApp */}
      <a
        href={whatsappLink}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Jaipuri Collections on WhatsApp"
      >
        <FaWhatsapp />
        <span>Chat on WhatsApp</span>
      </a>

      {/* Artwork */}
      <div className="footer-art">
        <img
          src="/images/jaipurheritage.webp"
          alt="Jaipur Artwork"
        />

        <div className="footer-art-content">
          <div className="footer-logo">
            <h2>JAIPURI</h2>
            <span>COLLECTIONS</span>
          </div>

          <p className="footer-tagline">
            Inspired by Jaipur's timeless craftsmanship.
          </p>

          <p className="copyright">
            ©️ 2026 Jaipuri Collections. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;