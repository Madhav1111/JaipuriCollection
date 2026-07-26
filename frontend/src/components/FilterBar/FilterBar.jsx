import "./FilterBar.css";

function FilterBar() {
  return (
    <section className="filter-section">
      <div className="filter-bar">

        {/* Filter */}
        <button className="filter-btn">
          <span className="filter-icon">⚙</span>
          Filter
        </button>

        {/* Product Count */}
        <div className="product-count">
          56 Products
        </div>

        {/* Sort */}
        <button className="sort-btn">
          Sort By
          <span className="sort-arrow">▼</span>
        </button>

      </div>
    </section>
  );
}

export default FilterBar;