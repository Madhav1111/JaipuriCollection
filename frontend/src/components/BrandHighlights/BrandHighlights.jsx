import "./BrandHighlights.css";

const features = [
  {
    icon: "🏛️",
    title: "Designed in Jaipur",
    subtitle: "Inspired by Rajasthan",
  },
  {
    icon: "🌿",
    title: "Premium Fabrics",
    subtitle: "Soft • Durable",
  },
  {
    icon: "🧵",
    title: "Handcrafted",
    subtitle: "Made with Care",
  },
  {
    icon: "🚚",
    title: "Fast Delivery",
    subtitle: "Across India",
  },
];

const stats = [
  {
    value: "500+",
    label: "Unique Designs",
    icon: "🌸",
  },
  {
    value: "10,000+",
    label: "Happy Customers",
    icon: "👥",
  },
  {
    value: "4.8",
    label: "Customer Rating",
    icon: "⭐",
  },
  {
    value: "100%",
    label: "Premium Quality",
    icon: "🛡️",
  },
];

function BrandHighlights() {
  return (
    <section className="brand-highlights">

      {/* FEATURES */}

      <div className="feature-row">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <span>{item.subtitle}</span>
          </div>
        ))}
      </div>

      {/* STATS */}

      <div className="stats-strip">
        {stats.map((item, index) => (
          <div className="stat-item" key={index}>
            <div className="stat-icon">{item.icon}</div>

            <h2>{item.value}</h2>

            <p>{item.label}</p>
          </div>
        ))}
      </div>

      {/* FOOTER */}

   
    </section>
  );
}

export default BrandHighlights;