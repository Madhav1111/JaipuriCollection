import "./DiscoverCollections.css";
import { useNavigate } from "react-router-dom";

const collections = [
  {
    id: 1,
    title: "SUITS",
    subtitle: "Elegant Cotton Suits for Every Occasion",
    image: "/images/discoversuit.webp",
    icon: "👗",
    slug: "suits",
  },
  {
    id: 2,
    title: "DOHARS",
    subtitle: "All Season Comfort in Soft Dohars",
    image: "/images/dohar.jpg",
    icon: "🛏️",
    slug: "dohars",
  },
  {
    id: 3,
    title: "LEHENGAS",
    subtitle: "Timeless Jaipur Lehengas in Pure Fabrics",
    image: "/images/saree.jpg",
    icon: "🥻",
    slug: "lehengas",
  },
  {
    id: 4,
    title: "BEDSHEETS",
    subtitle: "Luxury Bedsheets for Extra Comfort",
    image: "/images/bedsheetoutlet.webp",
    icon: "❄️",
    slug: "bedsheets",
  },
];

function DiscoverCollections({ currentCategory }) {
  const navigate = useNavigate();

  const filteredCollections = collections.filter(
    (item) => item.slug !== currentCategory
  );

  return (
    <section className="discover-section">
      {/* Heading */}
      <div className="discover-heading">
        <div className="discover-title">
          <span>✦</span>
          <h2>DISCOVER MORE COLLECTIONS</h2>
          <span>✦</span>
        </div>

        <p>Explore our handcrafted Jaipuri essentials beyond this collection.</p>
      </div>

      {/* Cards */}
      <div className="discover-slider">
        {filteredCollections.map((item) => (
          <div
            className="discover-card"
            key={item.id}
            onClick={() => navigate(`/collection/${item.slug}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="discover-image-wrapper">
              <img
                src={item.image}
                alt={item.title}
                className="discover-image"
              />
            </div>

            <div className="discover-content">
              <div className="discover-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.subtitle}</p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/collection/${item.slug}`);
                }}
              >
                EXPLORE →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DiscoverCollections;