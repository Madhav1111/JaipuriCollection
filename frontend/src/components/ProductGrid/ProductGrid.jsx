import { useEffect, useMemo, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

function ProductGrid({ category }) {
  const loadMoreRef = useRef(null);
  const PRODUCTS_PER_PAGE = 8;
  const LOAD_BATCH = 2;

  // ===========================
  // PRODUCTS
  const products = {
    bedsheets: [
      {
        id: 1,
        image: "/images/after.webp",
        badge: "BEST SELLER",
        title: "Royal Floral Bedsheet Set",
        fabric: "100% Cotton",
        threadCount: "300 TC",
        price: 2499,
      },
      {
        id: 2,
        image: "/images/after.webp",
        badge: "NEW ARRIVAL",
        title: "Heritage Blue Bedsheet Set",
        fabric: "100% Cotton",
        threadCount: "300 TC",
        price: 2599,
      },
      {
        id: 3,
        image: "/images/after.webp",
        badge: "LIMITED",
        title: "Vintage Lotus Bedsheet Set",
        fabric: "100% Cotton",
        threadCount: "300 TC",
        price: 2400,
      },
      {
        id: 4,
        image: "/images/after.webp",
        badge: "BEST SELLER",
        title: "Blush Bloom Bedsheet Set",
        fabric: "100% Cotton",
        threadCount: "300 TC",
        price: 2500,
      },
      {
        id: 5,
        image: "/images/after.webp",
        badge: "BEST SELLER",
        title: "Blush Bloom Bedsheet Set",
        fabric: "100% Cotton",
        threadCount: "300 TC",
        price: 2500,
      },
      {
        id: 6,
        image: "/images/after.webp",
        badge: "BEST SELLER",
        title: "Blush Bloom Bedsheet Set",
        fabric: "100% Cotton",
        threadCount: "300 TC",
        price: 2500,
      },
      {
        id: 7,
        image: "/images/after.webp",
        badge: "BEST SELLER",
        title: "Blush Bloom Bedsheet Set",
        fabric: "100% Cotton",
        threadCount: "300 TC",
        price: "2,499",
      },
      {
        id: 8,
        image: "/images/after.webp",
        badge: "BEST SELLER",
        title: "Blush Bloom Bedsheet Set",
        fabric: "100% Cotton",
        threadCount: "300 TC",
        price: 2500,
      },
      {
        id: 9,
        image: "/images/after.webp",
        badge: "BEST SELLER",
        title: "Blush Bloom Bedsheet Set",
        fabric: "100% Cotton",
        threadCount: "300 TC",
        price: 2500,
      },
      {
        id: 10,
        image: "/images/after.webp",
        badge: "BEST SELLER",
        title: "Blush Bloom Bedsheet Set",
        fabric: "100% Cotton",
        threadCount: "300 TC",
        price: 2500,
      },
    ],

    suits: [
      {
        id: 5,
        image: "/images/products/suit1.jpg",
        badge: "NEW",
        title: "Festive Grace Suit",
        fabric: "Cotton",
        threadCount: "Printed",
        price: 2000,
      },
      {
        id: 6,
        image: "/images/products/suit2.jpg",
        badge: "PREMIUM",
        title: "Royal Anarkali Suit",
        fabric: "Cotton",
        threadCount: "Hand Block",
        price: 2500,
      },
    ],

    lehengas: [
      {
        id: 7,
        image: "/images/products/lehenga1.jpg",
        badge: "LUXURY",
        title: "Bridal Heritage Lehenga",
        fabric: "Silk Blend",
        threadCount: "Embroidery",
        price: 5500,
      },
      {
        id: 8,
        image: "/images/products/lehenga2.jpg",
        badge: "BEST SELLER",
        title: "Royal Wedding Lehenga",
        fabric: "Silk",
        threadCount: "Premium",
        price: 2500,
      },
    ],

    dohars: [
      {
        id: 9,
        image: "/images/products/dohar1.jpg",
        badge: "SOFT",
        title: "Premium Cotton Dohar",
        fabric: "Muslin Cotton",
        threadCount: "3 Layer",
        price: 2500,
      },
      {
        id: 10,
        image: "/images/products/dohar2.jpg",
        badge: "NEW",
        title: "Floral Summer Dohar",
        fabric: "Cotton",
        threadCount: "Lightweight",
        price: 2500,
      },
    ],
  };

  const displayProducts = products[category] || products.bedsheets;

  // ===========================
  // STATE
  // ===========================

  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(2);

  const gridRef = useRef(null);

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

  // ===========================
  // JSX
  // ===========================

  return (
    <section className="product-grid-section" ref={gridRef}>
      <div className="product-grid">
        {pageProducts.slice(0, visibleCount).map((product) => (
          <div key={product.id} className="product-card-wrapper">
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
