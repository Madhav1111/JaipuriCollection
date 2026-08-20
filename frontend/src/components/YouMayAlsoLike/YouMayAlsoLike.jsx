import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/useCart";
import "./YouMayAlsoLike.css";

function YouMayAlsoLike() {
  const [visibleProducts, setVisibleProducts] = useState(4);

  const navigate = useNavigate();
  console.log(navigate);
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Blue Floral Bedsheet Set",
      image: "/images/after.webp",
      rating: "4.8",
      reviews: "124",
      price: "1999",
      oldPrice: "2499",
      discount: "20% OFF",
    },
    {
      id: 2,
      name: "Royal Pink Bedsheet Set",
      image: "/images/after.webp",
      rating: "4.9",
      reviews: "86",
      price: "2299",
      oldPrice: "2899",
      discount: "21% OFF",
    },
    {
      id: 3,
      name: "Classic Jaipuri Floral Set",
      image: "/images/after.webp",
      rating: "4.7",
      reviews: "95",
      price: "1799",
      oldPrice: "2299",
      discount: "22% OFF",
    },
    {
      id: 4,
      name: "Royal Heritage Bedsheet",
      image: "/images/after.webp",
      rating: "4.9",
      reviews: "156",
      price: "2499",
      oldPrice: "3199",
      discount: "22% OFF",
    },
    {
      id: 5,
      name: "Elegant Jaipur Garden Set",
      image: "/images/after.webp",
      rating: "4.8",
      reviews: "112",
      price: "2199",
      oldPrice: "2799",
      discount: "21% OFF",
    },
    {
      id: 6,
      name: "Traditional Block Print Set",
      image: "/images/after.webp",
      rating: "4.7",
      reviews: "98",
      price: "1899",
      oldPrice: "2399",
      discount: "21% OFF",
    },
    {
      id: 7,
      name: "Luxury Rose Bedsheet Set",
      image: "/images/after.webp",
      rating: "4.9",
      reviews: "174",
      price: "2599",
      oldPrice: "3299",
      discount: "21% OFF",
    },
    {
      id: 8,
      name: "Classic Royal Cotton Set",
      image: "/images/after.webp",
      rating: "4.8",
      reviews: "143",
      price: "2099",
      oldPrice: "2699",
      discount: "22% OFF",
    },
  ];

  const showMoreProducts = () => {
    setVisibleProducts((previous) => Math.min(previous + 2, products.length));
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
        {products.slice(0, visibleProducts).map((product) => (
          <article
            className="recommendation-card"
            key={product.id}
            onClick={() => {
              console.log("clicked");
              navigate("/product");
            }}
          >
            <div className="recommendation-image-wrap">
              <img
                src={product.image}
                alt={product.name}
                className="recommendation-image"
              />

              <button
                className="recommendation-wishlist"
                aria-label="Add to wishlist"
                onClick={(e) => e.stopPropagation()}
              >
                ♡
              </button>

              <span className="recommendation-discount">
                {product.discount}
              </span>
            </div>

            <div className="recommendation-info">
              <h3>{product.name}</h3>

              <div className="recommendation-rating">
                <span className="stars">★★★★★</span>

                <span className="rating-number">{product.rating}</span>

                <span className="review-count">({product.reviews})</span>
              </div>

              <div className="recommendation-price">
                <span className="current-price">
                  ₹{Number(product.price).toLocaleString("en-IN")}
                </span>

                <span className="original-price">
                  ₹{Number(product.oldPrice).toLocaleString("en-IN")}
                </span>
              </div>

              <button
                className="recommendation-cart-btn"
                onClick={(e) => {
                  e.stopPropagation();

                  addToCart(
                    {
                      ...product,
                      title: product.name,
                    },
                    "Double",
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

      {visibleProducts < products.length && (
        <button className="view-more-btn" onClick={showMoreProducts}>
          View More ↓
        </button>
      )}
    </section>
  );
}

export default YouMayAlsoLike;
