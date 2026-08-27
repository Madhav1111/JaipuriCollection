import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/useCart";
import "./ProductGrid.css";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, "Double");
    alert("Added to cart!");
  };

  // Badge
  let badge = "";

  if (product.bestSeller) {
    badge = "BEST SELLER";
  } else if (product.newArrival) {
    badge = "NEW ARRIVAL";
  } else if (product.featured) {
    badge = "FEATURED";
  } else if (product.trending) {
    badge = "TRENDING";
  }

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product._id}`)}
    >
      {/* Image */}
      <div className="product-image-wrapper">
        <img
          src={
            product.images?.length > 0
              ? `${import.meta.env.VITE_API_URL.replace("/api", "")}${product.images[0]}`
              : "/images/placeholder.jpg"
          }
          alt={product.name}
          className="product-image"
        />

        {badge && <span className="product-badge">{badge}</span>}

        <button className="wishlist-btn" onClick={(e) => e.stopPropagation()}>
          ♡
        </button>
      </div>

      {/* Details */}
      <div className="product-info">
        <h3>{product.name}</h3>

        <p className="product-meta">
          {product.fabric || "Premium Quality"}
          {product.threadCount && ` • ${product.threadCount}`}
        </p>

        <div className="product-bottom">
          <div className="product-price">
            ₹{Number(product.price).toLocaleString("en-IN")}
          </div>

          <button className="add-cart-btn" onClick={handleAddToCart}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
