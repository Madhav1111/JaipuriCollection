import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/useCart";
import "./ProductGrid.css";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log(product);
    addToCart(product, "Double");

    alert("Added to cart!");
  };

  return (
    <div className="product-card" onClick={() => navigate("/product")}>
      {/* Image */}
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />

        {/* Badge */}
        <span className="product-badge">{product.badge}</span>

        {/* Wishlist */}
        <button className="wishlist-btn" onClick={(e) => e.stopPropagation()}>
          ♡
        </button>
      </div>

      {/* Details */}
      <div className="product-info">
        <h3>{product.title}</h3>

        <p className="product-meta">
          {product.fabric} • {product.threadCount}
        </p>

        <div className="product-bottom">
          <div className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
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
