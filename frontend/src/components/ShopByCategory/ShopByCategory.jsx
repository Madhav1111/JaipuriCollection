import "./ShopByCategory.css";

const categories = [
  {
    id: 1,
    name: "All Bedsheets",
    image: "/images/categories/all-bedsheets.jpg",
  },
  {
    id: 2,
    name: "Floral Prints",
    image: "/images/categories/floral.jpg",
  },
  {
    id: 3,
    name: "Jaipuri Prints",
    image: "/images/categories/jaipuri.jpg",
  },
  {
    id: 4,
    name: "Premium Cotton",
    image: "/images/categories/premium.jpg",
  },
  {
    id: 5,
    name: "King Size",
    image: "/images/categories/king.jpg",
  },
  {
    id: 6,
    name: "New Arrivals",
    image: "/images/categories/new.jpg",
  },
];

function ShopByCategory() {
  return (
    <section className="shop-category-section">
      {/* Header */}
      <div className="category-header">
        <h2>SHOP BY CATEGORY</h2>

        <button className="view-all-btn">
          View All →
        </button>
      </div>

      {/* Categories */}
      <div className="category-scroll">
        {categories.map((category, index) => (
          <button
            key={category.id}
            className={`category-item ${
              index === 0 ? "active" : ""
            }`}
          >
            <div className="category-image">
              <img
                src={category.image}
                alt={category.name}
              />
            </div>

            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ShopByCategory;