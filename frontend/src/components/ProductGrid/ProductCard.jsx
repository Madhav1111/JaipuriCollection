import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/useCart";
import { useToast } from "../../context/useToast";
import "./ProductGrid.css";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (e) => {
  e.stopPropagation();

  addToCart(product, product.size?.[0] || "Standard");

  showToast(
    "Added to Bag",
    `${product.name} has been added to your bag.`
  );
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
              ? product.images[0]
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
            <span className="currency">₹</span>
            <span className="amount">
              {Number(product.price).toLocaleString("en-IN")}
            </span>
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
