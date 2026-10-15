import { useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { useCart } from "../../context/useCart";
import { useWishlist } from "../../context/useWishlist";
import "./ProductGrid.css";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const [added, setAdded] = useState(false);
  const favorite = isWishlisted(product._id);

  const handleAddToCart = (e) => {
    e.stopPropagation();

    addToCart(product, product.size?.[0] || "Standard");

    confetti({
      particleCount: 65,
      spread: 65,
      startVelocity: 28,
      gravity: 0.9,
      origin: { x: 0.5, y: 0.65 },
      colors: ["#7A233B", "#B88943", "#E8D7B5", "#FAF7F2"],
      ticks: 130,
      scalar: 0.85,
      disableForReducedMotion: true,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

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

        <button
          type="button"
          className={`wishlist-btn ${favorite ? "is-wishlisted" : ""}`}
          onClick={handleWishlist}
          aria-label={
            favorite
              ? `Remove ${product.name} from favourites`
              : `Add ${product.name} to favourites`
          }
          aria-pressed={favorite}
        >
          {favorite ? "♥️" : "♡"}
        </button>
      </div>

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

          <button
            type="button"
            className="add-cart-btn"
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
          >
            +
          </button>
        </div>

        {added && (
          <p className="product-card-added" role="status">
            ✓ Added to your bag
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductCard;