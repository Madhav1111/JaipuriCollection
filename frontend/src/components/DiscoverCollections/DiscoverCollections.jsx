import "./DiscoverCollections.css";

const collections = [
  {
    id: 1,
    title: "SUITS",
    subtitle: "Elegant Cotton Suits for Every Occasion",
    image: "/images/discover/suits.jpg",
    icon: "👗",
  },
  {
    id: 2,
    title: "SAREES",
    subtitle: "Timeless Jaipur Sarees in Pure Fabrics",
    image: "/images/discover/sarees.jpg",
    icon: "🥻",
  },
  {
    id: 3,
    title: "DOHARS",
    subtitle: "All Season Comfort in Soft Dohars",
    image: "/images/discover/dohars.jpg",
    icon: "🛏️",
  },
  {
    id: 4,
    title: "QUILTS",
    subtitle: "Luxury Winter Quilts for Extra Warmth",
    image: "/images/discover/quilts.jpg",
    icon: "❄️",
  },
];

function DiscoverCollections() {
  return (
    <section className="discover-section">

      {/* Heading */}

      <div className="discover-heading">

        <div className="discover-title">

          <span>✦</span>

          <h2>DISCOVER MORE COLLECTIONS</h2>

          <span>✦</span>

        </div>

        <p>
          Explore our handcrafted Jaipuri essentials beyond bedsheets.
        </p>

      </div>

      {/* Cards */}

      <div className="discover-slider">

        {collections.map((item) => (

          <div className="discover-card" key={item.id}>

            <div className="discover-image-wrapper">

              <img
                src={item.image}
                alt={item.title}
                className="discover-image"
              />

            </div>

            <div className="discover-content">

              <div className="discover-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.subtitle}</p>

              <button>
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