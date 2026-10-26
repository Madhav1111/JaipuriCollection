import { useEffect, useMemo, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";
import API from "../../api/api";
import { useWishlist } from "../../context/useWishlist";

function ProductGrid({
  category,
  selectedCategory,
  sortOption,
  setProductCount,
  showFavourites = false,
}) {
  const loadMoreRef = useRef(null);
  const gridRef = useRef(null);

  const PRODUCTS_PER_PAGE = 8;
  const LOAD_BATCH = 2;

  const { wishlist } = useWishlist();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(2);

  // ===========================
  // FILTER AND SORT PRODUCTS
  // ===========================

  const displayProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        product.category?.toLowerCase() === category?.toLowerCase();

      const matchesSubcategory =
        !selectedCategory ||
        selectedCategory.startsWith("All") ||
        product.subcategory === selectedCategory;

      const matchesFavourite =
        !showFavourites || wishlist.some((item) => item._id === product._id);

      return matchesCategory && matchesSubcategory && matchesFavourite;
    });

    switch (sortOption) {
      case "low-high":
        return [...filtered].sort((a, b) => Number(a.price) - Number(b.price));

      case "high-low":
        return [...filtered].sort((a, b) => Number(b.price) - Number(a.price));

      case "az":
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));

      case "za":
        return [...filtered].sort((a, b) => b.name.localeCompare(a.name));

      case "newest":
        return [...filtered].reverse();

      default:
        return filtered;
    }
  }, [
    products,
    category,
    selectedCategory,
    sortOption,
    showFavourites,
    wishlist,
  ]);

  // ===========================
  // PRODUCT COUNT
  // ===========================

  useEffect(() => {
    setProductCount(displayProducts.length);
  }, [displayProducts, setProductCount]);

  // ===========================
  // FETCH PRODUCTS
  // ===========================

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await API.get("/products");
        setProducts(data.products || []);
      } catch (error) {
        console.error("Unable to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ===========================
  // RESET PAGINATION WHEN
  // FILTERS OR SORTING CHANGE
  // ===========================

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1);
    setVisibleCount(2);
  }, [category, selectedCategory, sortOption, showFavourites]);

  // ===========================
  // CURRENT PAGE PRODUCTS
  // ===========================

  const pageProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;

    return displayProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [displayProducts, currentPage]);

  const totalPages = Math.ceil(displayProducts.length / PRODUCTS_PER_PAGE);

  // ===========================
  // SCROLL REVEAL
  // ===========================

  useEffect(() => {
    const target = loadMoreRef.current;

    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && visibleCount < pageProducts.length) {
          setVisibleCount((prev) =>
            Math.min(prev + LOAD_BATCH, pageProducts.length),
          );
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [visibleCount, pageProducts]);

  // ===========================
  // PAGE CHANGE
  // ===========================

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
    setVisibleCount(2);

    setTimeout(() => {
      if (!gridRef.current) return;

      const y =
        gridRef.current.getBoundingClientRect().top + window.pageYOffset - 250;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 100);
  };

  // ===========================
  // LOADING
  // ===========================

  if (loading) {
    return (
      <div className="product-grid-loading">
        <div className="product-grid-spinner"></div>
        <h2>Loading Collection</h2>
        <p>Discovering beautiful handcrafted pieces...</p>
      </div>
    );
  }

  // ===========================
  // JSX
  // ===========================

  return (
    <section className="product-grid-section" ref={gridRef}>
      {showFavourites && displayProducts.length === 0 && (
        <div className="product-grid-empty">
          <h2>Your favourites await</h2>
          <p>
            You haven't saved any designs from this collection yet. Tap the
            heart on a product to keep your favourite designs close.
          </p>
        </div>
      )}

      {!showFavourites && displayProducts.length === 0 && (
        <div className="product-grid-empty">
          <h2>No products found</h2>
          <p>Try selecting another category.</p>
        </div>
      )}

      <div className="product-grid">
        {pageProducts.slice(0, visibleCount).map((product) => (
          <div key={product._id} className="product-card-wrapper">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {pageProducts.length > 0 && (
        <div
          ref={loadMoreRef}
          style={{
            height: "20px",
            width: "100%",
          }}
        />
      )}

      {visibleCount >= pageProducts.length && totalPages > 1 && (
        <div className="pagination">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => changePage(currentPage - 1)}
            aria-label="Previous page"
          >
            ←
          </button>

          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              type="button"
              key={index}
              className={currentPage === index + 1 ? "active-page" : ""}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => changePage(currentPage + 1)}
            aria-label="Next page"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductGrid;
