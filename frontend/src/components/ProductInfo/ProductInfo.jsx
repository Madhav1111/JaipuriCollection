import { useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import "./ProductInfo.css";
import { useCart } from "../../context/useCart";
function ProductInfo({ product }) {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState("");
  const { addToCart, clearCart } = useCart();
  const sizes =
    product.size && product.size.length > 0
      ? product.size
      : ["Standard"];
  const productDetails =
    product.productDetails && product.productDetails.length > 0
      ? product.productDetails
      : [];
  // ADD TO CART — stay on the product page
  const handleAddToCart = () => {
    if (!selectedSize) {
      setCartMessage("Please select a size first.");
      return;
    }
    addToCart(product, selectedSize, quantity);
    setCartMessage("Added to your bag ✓");
    // Burgundy, antique gold and ivory celebration
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
  // BUY NOW — proceed to checkout
  const handleBuyNow = () => {
    if (!selectedSize) {
      setCartMessage("Please select a size first.");
      return;
    }
    clearCart();
    addToCart(product, selectedSize, quantity);
    navigate("/checkout");
  };
  return (
    <section className="product-detail-info">
      <p className="collection-name">
        {product.collection || "JAIPURI COLLECTION"}
      </p>
      <h1 className="product-title">{product.name}</h1>
      <div className="rating-row">
        ⭐⭐⭐⭐⭐
        <span>4.9 (186)</span>
        <span> | </span>
        <span>200+ Happy Customers</span>
      </div>
      {/* PRICE */}
      <div className="price-row">
        <h2>
          ₹{Number(product.price).toLocaleString("en-IN")}
        </h2>
        {product.originalPrice && (
          <span className="old-price">
            ₹{Number(product.originalPrice).toLocaleString("en-IN")}
          </span>
        )}
        {product.discount > 0 && (
          <span className="discount">
            {product.discount}% OFF
          </span>
        )}
      </div>
      {/* SIZE SELECTOR */}
      <div className="size-selector">
        <div className="size-heading">
          <h3>Size</h3>
          <span>{selectedSize}</span>
        </div>
        <div className="size-options">
          {sizes.map((size) => (
            <button
              type="button"
              key={size}
              className={`size-option ${
                selectedSize === size ? "active" : ""
              }`}
              onClick={() => {
                setSelectedSize(size);
                setCartMessage("");
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      {/* QUANTITY SELECTOR */}
      <div className="quantity-selector">
        <h3>Quantity</h3>
        <div className="quantity-control">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() =>
              setQuantity((current) => Math.max(1, current - 1))
            }
          >
            −
          </button>
          <span>{quantity}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() =>
              setQuantity((current) => current + 1)
            }
          >
            +
          </button>
        </div>
      </div>
      {/* PURCHASE ACTIONS */}
      <div className="purchase-actions">
        <button
          type="button"
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          🛒 Add to Cart
        </button>
        <button
          type="button"
          className="buy-now-btn"
          onClick={handleBuyNow}
        >
          Buy Now →
        </button>
      </div>
      {/* CART FEEDBACK */}
      {cartMessage && (
        <p
          className={`product-cart-message ${
            cartMessage.startsWith("Added") ? "success" : "error"
          }`}
          role="status"
          aria-live="polite"
        >
          {cartMessage}
        </p>
      )}
      {/* WHAT'S INCLUDED */}
      {productDetails[0] && (
        <div className="whats-included">
          <h3>{productDetails[0].title}</h3>
          <div className="included-list">
            {productDetails[0].items?.map((item, index) => {
              const icons = ["▱", "▭", "⌑", "▣", "✦", "◆"];
              return (
                <div className="included-item" key={index}>
                  <span className="included-icon">
                    {icons[index] || "▣"}
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* FABRIC & DETAILS */}
      {productDetails[1] && (
        <div className="fabric-details">
          <h3>{productDetails[1].title}</h3>
          <div className="fabric-grid">
            {productDetails[1].items?.map((item, index) => {
              const icons = ["✿", "♨", "✾", "▧", "✦", "◆"];
              return (
                <div className="fabric-item" key={index}>
                  <span className="fabric-icon">
                    {icons[index] || "✿"}
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* CARE INSTRUCTIONS */}
      {productDetails[2] && (
        <div className="care-instructions">
          <h3>{productDetails[2].title}</h3>
          <div className="care-list">
            {productDetails[2].items?.map((item, index) => {
              const icons = ["▣", "⚔", "▣", "✿", "✦", "◆"];
              return (
                <div className="care-item" key={index}>
                  <span className="care-icon">
                    {icons[index] || "▣"}
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
export default ProductInfo;