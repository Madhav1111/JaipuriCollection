import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/useCart";
import axios from "axios";
import "./YouMayAlsoLike.css";

function YouMayAlsoLike({ product }) {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(4);

  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:9000/api/products"
        );

        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const recommendedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item._id !== product._id
  );

  const showMoreProducts = () => {
    setVisibleProducts((prev) =>
      Math.min(prev + 2, recommendedProducts.length)
    );
  };

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
          .map((item) => (
            <article
              className="recommendation-card"
              key={item._id}
              onClick={() => navigate(`/product/${item._id}`)}
            >
              <div className="recommendation-image-wrap">
                <img
                  src={
                    item.images?.length > 0
                      ? `http://localhost:9000${item.images[0]}`
                      : "/images/placeholder.jpg"
                  }
                  alt={item.name}
                  className="recommendation-image"
                />

                <button
                  className="recommendation-wishlist"
                  aria-label="Add to wishlist"
                  onClick={(e) => e.stopPropagation()}
                >
                  ♡
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
                  className="recommendation-cart-btn"
                  onClick={(e) => {
                    e.stopPropagation();

                    addToCart(
                      item,
                      item.size?.[0] || "Standard"
                    );

                    alert("Added to cart!");
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
      </div>

      {visibleProducts < recommendedProducts.length && (
        <button
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