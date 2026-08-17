import { Link } from "react-router-dom";
import "./SignatureCollections.css";

function SignatureCollections() {
  return (
    <section className="signature-section">
      {/* Heading */}
      <div className="signature-wrap">
        <div className="signature-title">
          <div className="signature-top">✦ SIGNATURE ✦</div>
          <div className="signature-bottom">COLLECTIONS</div>
        </div>
      </div>

      {/* Cards Container */}
      <div className="cards-wrapper">
        <div className="collection-grid">

          {/* Bedsheets */}
          <Link to="/collection/bedsheets" className="collection-link">
            <div className="collection-card">
              <img
                src="/images/bedsheet.jpg"
                alt="Royal Floral Bedsheets"
              />
              <div className="card-overlay">
                <h3>Royal Florals Bedsheets</h3>
                <span>Explore Collection →</span>
              </div>
            </div>
          </Link>

          {/* Suits */}
          <Link to="/collection/suits" className="collection-link">
            <div className="collection-card">
              <img
                src="/images/suits.jpg"
                alt="Festive Grace Suits"
              />
              <div className="card-overlay">
                <h3>Festive Grace Suits</h3>
                <span>Explore Collection →</span>
              </div>
            </div>
          </Link>

          {/* Lehengas */}
          <Link to="/collection/lehengas" className="collection-link">
            <div className="collection-card">
              <img
                src="/images/saree.jpg"
                alt="Timeless Elegance Lehengas"
              />
              <div className="card-overlay">
                <h3>Timeless Elegance Lehengas</h3>
                <span>Explore Collection →</span>
              </div>
            </div>
          </Link>

          {/* Dohars */}
          <Link to="/collection/dohars" className="collection-link">
            <div className="collection-card">
              <img
                src="/images/dohar.jpg"
                alt="All Season Comfort Dohars"
              />
              <div className="card-overlay">
                <h3>All Season Comfort Dohars</h3>
                <span>Explore Collection →</span>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default SignatureCollections;