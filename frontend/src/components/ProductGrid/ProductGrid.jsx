import { useEffect, useMemo, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";
import API from "../../api/api";

function ProductGrid({ category, sortOption, setProductCount }) {
  const loadMoreRef = useRef(null);
  const PRODUCTS_PER_PAGE = 8;
  const LOAD_BATCH = 2;

  // ===========================
  // PRODUCTS
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const displayProducts = useMemo(() => {
    const filtered = products.filter(
      (product) => product.category?.toLowerCase() === category?.toLowerCase(),
    );

    switch (sortOption) {
      case "low-high":
        return [...filtered].sort((a, b) => a.price - b.price);

      case "high-low":
        return [...filtered].sort((a, b) => b.price - a.price);

      case "az":
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));

      case "za":
        return [...filtered].sort((a, b) => b.name.localeCompare(a.name));

      case "newest":
        return [...filtered].reverse();

      default:
        return filtered;
    }
  }, [products, category, sortOption]);

  useEffect(() => {
    setProductCount(displayProducts.length);
  }, [displayProducts, setProductCount]);

  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(2);

  const gridRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await API.get("/products");

        setProducts(data.products);

        setProducts(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ===========================
  // CURRENT PAGE PRODUCTS
  // ===========================

  const pageProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;

    return displayProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [displayProducts, currentPage]);

  const totalPages = Math.ceil(displayProducts.length / PRODUCTS_PER_PAGE);

  // ===========================
  // RESET WHEN CATEGORY CHANGES
  // ===========================

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1);
    setVisibleCount(2);
  }, [category]);

  // ===========================
  // SCROLL REVEAL
  // ===========================

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && visibleCount < pageProducts.length) {
          setVisibleCount((prev) =>
            Math.min(prev + LOAD_BATCH, pageProducts.length),
          );
        }
      },
      {
        threshold: 0.2,
      },
    );

    const target = loadMoreRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [visibleCount, pageProducts, LOAD_BATCH]);
  // ===========================
  // PAGE CHANGE
  // ===========================

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
    setVisibleCount(2);

    setTimeout(() => {
      const y =
        gridRef.current.getBoundingClientRect().top + window.pageYOffset - 250; // adjust this value if needed

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 100);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  // ===========================
  // JSX
  // ===========================

  return (
    <section className="product-grid-section" ref={gridRef}>
      <div className="product-grid">
        {pageProducts.slice(0, visibleCount).map((product) => (
          <div key={product._id} className="product-card-wrapper">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div
        ref={loadMoreRef}
        style={{
          height: "20px",
          width: "100%",
        }}
      />

      {visibleCount === pageProducts.length && totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => changePage(currentPage - 1)}
          >
            ←
          </button>

          {Array.from({
            length: totalPages,
          }).map((_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active-page" : ""}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => changePage(currentPage + 1)}
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductGrid;
