import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

import { useCart } from "../../context/useCart";
import { useWishlist } from "../../context/useWishlist";
import API from "../../api/api";

import "./YouMayAlsoLike.css";

function YouMayAlsoLike({ product }) {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(4);

  const navigate = useNavigate();

  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  // ===========================
  // FETCH PRODUCTS
  // ===========================

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await API.get("/products");
        setProducts(data.products || []);
      } catch (error) {
        console.error("Unable to fetch recommended products:", error);
      }
    };

    fetchProducts();
  }, []);

  // ===========================
  // RECOMMENDED PRODUCTS
  // ===========================

  const recommendedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item._id !== product._id
  );

  // ===========================
  // VIEW MORE
  // ===========================

  const showMoreProducts = () => {
    setVisibleProducts((prev) =>
      Math.min(prev + 2, recommendedProducts.length)
    );
  };

  // ===========================
  // WISHLIST
  // ===========================

  const handleWishlist = (e, item) => {
    e.stopPropagation();
    toggleWishlist(item);
  };

  // ===========================
  // ADD TO CART
  // ===========================

  const handleAddToCart = (e, item) => {
    e.stopPropagation();

    addToCart(item, item.size?.[0] || "Standard");

    confetti({
      particleCount: 90,
      spread: 75,
      startVelocity: 32,
      gravity: 0.9,
      origin: {
        x: 0.5,
        y: 0.55,
      },
      colors: ["#7A233B", "#B88943", "#E8D7B5", "#FAF7F2"],
      ticks: 150,
      scalar: 0.9,
      disableForReducedMotion: true,
    });
  };

  // ===========================
  // JSX
  // ===========================

  return (
    <section className="you-may-also-like">
      <div className="recommendation-heading">
        <div>
          <span>DISCOVER MORE</span>
          <h2>You May Also Like</h2>
        </div>
      </div>

      <div className="recommendation-grid">
        {recommendedProducts
          .slice(0, visibleProducts)
          .map((item) => {
            const favorite = isWishlisted(item._id);

            return (
              <article
                className="recommendation-card"
                key={item._id}
                onClick={() => navigate(`/product/${item._id}`)}
              >
                <div className="recommendation-image-wrap">
                  <img
                    src={
                      item.images?.length > 0
                        ? item.images[0]
                        : "/images/placeholder.jpg"
                    }
                    alt={item.name}
                    className="recommendation-image"
                  />

                  <button
                    type="button"
                    className="recommendation-wishlist"
                    aria-label={
                      favorite
                        ? "Remove from wishlist"
                        : "Add to wishlist"
                    }
                    aria-pressed={favorite}
                    onClick={(e) => handleWishlist(e, item)}
                  >
                    {favorite ? "♥️" : "♡"}
                  </button>

                  {item.discount > 0 && (
                    <span className="recommendation-discount">
                      {item.discount}% OFF
                    </span>
                  )}
                </div>

                <div className="recommendation-info">
                  <h3>{item.name}</h3>

                  <div className="recommendation-rating">
                    <span className="stars">★★★★★</span>

                    <span className="rating-number">
                      {item.rating}
                    </span>

                    <span className="review-count">
                      ({item.reviews})
                    </span>
                  </div>

                  <div className="recommendation-price">
                    <span className="current-price">
                      ₹{Number(item.price).toLocaleString("en-IN")}
                    </span>

                    {item.originalPrice && (
                      <span className="original-price">
                        ₹
                        {Number(item.originalPrice).toLocaleString(
                          "en-IN"
                        )}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="recommendation-cart-btn"
                    onClick={(e) => handleAddToCart(e, item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </article>
            );
          })}
      </div>

      {visibleProducts < recommendedProducts.length && (
        <button
          type="button"
          className="view-more-btn"
          onClick={showMoreProducts}
        >
          View More ↓
        </button>
      )}
    </section>
  );
}

export default YouMayAlsoLike;