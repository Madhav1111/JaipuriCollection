import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";
import "../styles/cart.css";
function Cart() {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeItem } = useCart();
  const [itemToRemove, setItemToRemove] = useState(null);
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const handleRemove = () => {
    if (!itemToRemove) return;
    removeItem(itemToRemove._id);
    setItemToRemove(null);
  };
  return (
    <main className="cart-page">
      {/* HEADER */}
      <div className="cart-header">
        <div className="cart-arch">
          <svg
            className="cart-arch-frame"
            viewBox="0 0 360 300"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Outer Mughal arch */}
            <path
              d="
                M 8,296
                L 8,155
                Q 8,125 35,112
                Q 52,103 52,82
                Q 52,57 82,55
                Q 112,53 128,32
                Q 145,8 180,8
                Q 215,8 232,32
                Q 248,53 278,55
                Q 308,57 308,82
                Q 308,103 325,112
                Q 352,125 352,155
                L 352,296
              "
              fill="none"
              stroke="#A77B3F"
              strokeWidth="1.8"
              vectorEffect="non-scaling-stroke"
            />
            {/* Inner Mughal arch */}
            <path
              d="
                M 16,340
                L 16,157
                Q 16,130 41,119
                Q 60,110 60,84
                Q 60,65 87,63
                Q 117,60 134,38
                Q 150,16 180,16
                Q 210,16 226,38
                Q 243,60 273,63
                Q 300,65 300,84
                Q 300,110 319,119
                Q 344,130 344,157
                L 344,340
              "
              fill="none"
              stroke="#C6A16A"
              strokeWidth="1.2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div className="cart-header-content">
            <p className="cart-eyebrow">SHOPPING BAG</p>
            <h1>Your Cart</h1>
            <div className="cart-header-divider">
              <span />
              <span className="cart-header-diamond">◆</span>
              <span />
            </div>
            <p className="cart-header-subtitle">
              Bringing tradition to your everyday spaces.
            </p>
          </div>
        </div>
      </div>
      {/* CART ITEMS */}
      <section className="cart-items">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>
              Discover something beautiful from our Jaipuri collection.
            </p>
            <button
              className="checkout-btn"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          cart.map((item) => (
            <div
              className="cart-item"
              key={`${item._id}-${item.selectedSize}`}
            >
              <div className="cart-item-image">
                <img
                  src={
                    item.images?.length
                      ? item.images[0]
                      : "/images/placeholder.jpg"
                  }
                  alt={item.name}
                />
              </div>
              <div className="cart-item-details">
                <span className="cart-collection">
                  {item.collection || "JAIPURI COLLECTION"}
                </span>
                <h2>{item.name}</h2>
                <p className="cart-size">
                  Size:{" "}
                  <strong>{item.selectedSize || "Standard"}</strong>
                </p>
                <div className="cart-price">
                  <strong>
                    ₹{Number(item.price).toLocaleString("en-IN")}
                  </strong>
                  {item.originalPrice && (
                    <span>
                      ₹
                      {Number(item.originalPrice).toLocaleString(
                        "en-IN",
                      )}
                    </span>
                  )}
                </div>
                {/* QUANTITY AND REMOVE */}
                <div className="cart-bottom">
                  <div className="cart-quantity">
                    <button
                      type="button"
                      aria-label={`Decrease quantity of ${item.name}`}
                      onClick={() => updateQuantity(item._id, -1)}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      aria-label={`Increase quantity of ${item.name}`}
                      onClick={() => updateQuantity(item._id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="remove-cart-item"
                    onClick={() => setItemToRemove(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
      {/* ORDER SUMMARY */}
      {cart.length > 0 && (
        <section className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <strong>
              ₹{subtotal.toLocaleString("en-IN")}
            </strong>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span className="free-delivery">FREE</span>
          </div>
          <div className="summary-divider" />
          <div className="summary-total">
            <span>Total</span>
            <strong>
              ₹{subtotal.toLocaleString("en-IN")}
            </strong>
          </div>
          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout →
          </button>
          <p className="secure-checkout">
            🔒 Secure &amp; Safe Checkout
          </p>
        </section>
      )}
      {/* REMOVE CONFIRMATION MODAL */}
      {itemToRemove && (
        <div
          className="remove-confirm-overlay"
          onClick={() => setItemToRemove(null)}
        >
          <div
            className="remove-confirm-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="remove-confirm-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="remove-confirm-ornament">✦</div>
            <h3 id="remove-confirm-title">Remove this item?</h3>
            <p>
              Are you sure you want to remove{" "}
              <strong>{itemToRemove.name}</strong> from your bag?
            </p>
            <div className="remove-confirm-actions">
              <button
                type="button"
                onClick={() => setItemToRemove(null)}
              >
                Keep Item
              </button>
              <button
                type="button"
                className="confirm-remove-btn"
                onClick={handleRemove}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
export default Cart;