import { useEffect, useRef, useState } from "react";
import "./FilterBar.css";

function FilterBar({ productCount, sortOption, setSortOption, onFilterClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "newest", label: "Newest" },
    { value: "low-high", label: "Price: Low → High" },
    { value: "high-low", label: "Price: High → Low" },
    { value: "az", label: "Name: A → Z" },
    { value: "za", label: "Name: Z → A" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOption =
    sortOptions.find((option) => option.value === sortOption)?.label ||
    "Default";

  return (
    <section className="filter-section">
      <div className="filter-bar">
        {/* Filter */}
        <button className="filter-btn" onClick={onFilterClick}>
          <span className="filter-icon">⚙</span>
          Filter
        </button>

        {/* Product Count */}
        <div className="product-count">{productCount} Products</div>

        {/* Sort */}
        <div className="sort-dropdown" ref={dropdownRef}>
          <button
            type="button"
            className="sort-trigger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{selectedOption}</span>

            <svg
              className={isOpen ? "arrow open" : "arrow"}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {isOpen && (
            <div className="sort-menu">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={
                    sortOption === option.value
                      ? "sort-item active"
                      : "sort-item"
                  }
                  onClick={() => {
                    setSortOption(option.value);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FilterBar;
