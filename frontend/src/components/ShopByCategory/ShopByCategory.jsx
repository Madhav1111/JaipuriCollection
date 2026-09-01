import "./ShopByCategory.css";

function ShopByCategory({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <section className="shop-category-section">
      {/* Header */}
      <div className="category-header">
        <h2>SHOP BY CATEGORY</h2>

        <button className="view-all-btn">
          Swipe →
        </button>
      </div>

      {/* Categories */}
      <div className="category-scroll">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-item ${
              selectedCategory === category.name ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category.name)}
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