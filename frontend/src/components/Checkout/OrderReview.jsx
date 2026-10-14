import { useState } from "react";
import { useCart } from "../../context/useCart";
import "./OrderReview.css";
function OrderReview({
  cart,
  address,
  onAddAddress,
  onEditAddress,
  paymentMethod,
  setPaymentMethod,
}) {
  const [showOrderSummary, setShowOrderSummary] = useState(true);
  const [itemToRemove, setItemToRemove] = useState(null);
  const { updateQuantity, removeItem } = useCart();
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const formatPrice = (price) =>
    `₹${Number(price || 0).toLocaleString("en-IN")}`;
  const getItemId = (item) => item.id || item._id;
  const changeQuantity = (item, change) => {
    if (item.quantity + change < 1) return;
    updateQuantity(getItemId(item), change);
    setItemToRemove((current) => {
      if (current && getItemId(current) === getItemId(item)) {
        return {
          ...current,
          quantity: item.quantity + change,
        };
      }
      return current;
    });
  };
  const confirmRemove = () => {
    if (!itemToRemove) return;
    const productId = getItemId(itemToRemove);
    removeItem(productId);
    setItemToRemove(null);
    // Return to the removed product page at the top.
    window.scrollTo(0, 0);
    window.location.href = `/product/${productId}`;
  };
  const paymentMethods = [
    {
      value: "upi",
      title: "Pay via UPI",
      detail: "Use any registered UPI ID",
      suggested: true,
    },
    {
      value: "cod",
      title: "Cash on delivery",
      detail: "Pay with cash",
    },
  ];
  return (
    <main className="order-review">
      {/* Header */}
      <header className="order-review-header">
        <button
          type="button"
          className="order-review-back"
          onClick={() => window.history.back()}
          aria-label="Go back"
        >
          ←
        </button>
        <div className="order-review-brand">
          <span>JAIPURI COLLECTIONS</span>
          <small>Secure Checkout</small>
        </div>
        <strong>{formatPrice(subtotal)}</strong>
      </header>
      {/* Promotional strip */}
      <div className="order-review-promo">
        A timeless touch of Jaipur, delivered to you
      </div>
      {/* Order summary */}
      <section className="review-card">
        <button
          type="button"
          className="review-accordion"
          onClick={() => setShowOrderSummary((prev) => !prev)}
          aria-expanded={showOrderSummary}
        >
          <span className="review-summary-title">
            <span className="review-cart-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
              </svg>
            </span>
            Order summary
          </span>
          <span className="review-summary-count">
            {totalItems} {totalItems === 1 ? "item" : "items"}
            <span className="review-accordion-arrow">
              {showOrderSummary ? "⌃" : "⌄"}
            </span>
          </span>
        </button>
        {showOrderSummary && (
          <div className="review-order-details">
            {cart.map((item, index) => (
              <div
                className="review-product"
                key={`${getItemId(item)}-${item.selectedSize || ""}-${index}`}
              >
                <img
                  src={
                    item.images?.length
                      ? item.images[0]
                      : "/images/placeholder.jpg"
                  }
                  alt={item.name || "Product"}
                />
                <div className="review-product-info">
                  <h3>{item.name}</h3>
                  {item.selectedSize && <p>{item.selectedSize}</p>}
                  <div className="review-product-controls">
                    <button
                      type="button"
                      className="review-delete-button"
                      aria-label={`Remove ${item.name}`}
                      onClick={() => setItemToRemove(item)}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 6h18" />
                        <path d="M8 6V4h8v2" />
                        <path d="m19 6-1 14H6L5 6" />
                        <path d="M10 10v6M14 10v6" />
                      </svg>
                    </button>
                    <div className="review-quantity-control">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        disabled={item.quantity <= 1}
                        onClick={() => changeQuantity(item, -1)}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => changeQuantity(item, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <strong className="review-product-price">
                  {formatPrice(item.price * item.quantity)}
                </strong>
              </div>
            ))}
            <div className="review-price-row">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            <div className="review-price-row">
              <span>Shipping</span>
              <strong>FREE</strong>
            </div>
            <div className="review-price-row review-total">
              <span>Total</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
          </div>
        )}
      </section>
      {/* Delivery address */}
      <section className="review-card">
        <div className="review-card-heading">
          <h2>Deliver to</h2>
          <button
            type="button"
            onClick={address ? onEditAddress : onAddAddress}
          >
            {address ? "Edit ›" : "Add address ›"}
          </button>
        </div>
        {address ? (
          <div className="review-address-details">
            <strong>{address.fullName}</strong>
            <p>
              {address.address}
              {address.locality ? `, ${address.locality}` : ""}
              , {address.city}, {address.state} - {address.pincode}
            </p>
            <p>
              {address.phone}
              {address.email ? ` · ${address.email}` : ""}
            </p>
            {address.addressType && (
              <span className="review-delivery-note">
                {address.addressType}
              </span>
            )}
          </div>
        ) : (
          <div className="review-no-address">
            No saved address
          </div>
        )}
      </section>
      {/* Offers */}
      <section className="review-offers">
        <h2>Offers &amp; Rewards</h2>
        <div className="review-offer-card">
          <div>
            <strong>Discover an offer</strong>
            <p>Coupon codes will be available here.</p>
          </div>
          <span>Offers</span>
        </div>
      </section>
      {/* Payment methods */}
      <section className="review-payment">
        <h2>Payment methods</h2>
        <div className="review-payment-list">
          {paymentMethods.map((method) => (
            <button
              type="button"
              key={method.value}
              className={`review-payment-option ${
                paymentMethod === method.value ? "active" : ""
              } ${method.suggested ? "suggested" : ""}`}
              onClick={() => setPaymentMethod(method.value)}
              aria-pressed={paymentMethod === method.value}
            >
              <span className="review-payment-content">
                <span className="review-payment-title">
                  <strong>{method.title}</strong>
                  {method.value === "upi" && (
                    <span className="review-upi-icons">
                      <span
                        className="upi-app-icon phonepe-icon"
                        aria-label="PhonePe"
                      >
                        पे
                      </span>
                    </span>
                  )}
                </span>
                <small>{method.detail}</small>
                {method.suggested && (
                  <span className="review-payment-benefit">
                    Suggested payment method
                  </span>
                )}
              </span>
              <span className="review-payment-right">
                <strong>{formatPrice(subtotal)}</strong>
                <span className="review-payment-arrow">›</span>
              </span>
            </button>
          ))}
        </div>
      </section>
      {/* Place order */}
      <button
        type="button"
        className="review-place-order"
        disabled={!address || cart.length === 0}
        onClick={() => {
          alert(
            "Payment and order processing will be connected next."
          );
        }}
      >
        {paymentMethod === "cod"
          ? `Place Order · ${formatPrice(subtotal)}`
          : `Continue to Payment · ${formatPrice(subtotal)}`}
      </button>
      <p className="review-secure-note">
        Your order details are protected.
      </p>
      {/* Remove confirmation bottom sheet */}
      {itemToRemove && (
        <div
          className="review-remove-overlay"
          onClick={() => setItemToRemove(null)}
        >
          <section
            className="review-remove-sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-remove-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="review-remove-heading">
              <h2 id="review-remove-title">
                Do you want to remove {itemToRemove.quantity}{" "}
                {itemToRemove.quantity === 1 ? "item" : "items"}?
              </h2>
              <button
                type="button"
                className="review-remove-close"
                onClick={() => setItemToRemove(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="review-remove-product">
              <img
                src={
                  itemToRemove.images?.length
                    ? itemToRemove.images[0]
                    : "/images/placeholder.jpg"
                }
                alt={itemToRemove.name || "Product"}
              />
              <div className="review-remove-product-info">
                <h3>{itemToRemove.name}</h3>
                {itemToRemove.selectedSize && (
                  <p>{itemToRemove.selectedSize}</p>
                )}
                <div className="review-quantity-control">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    disabled={itemToRemove.quantity <= 1}
                    onClick={() => changeQuantity(itemToRemove, -1)}
                  >
                    −
                  </button>
                  <span>{itemToRemove.quantity}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => changeQuantity(itemToRemove, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <strong className="review-remove-price">
                {formatPrice(
                  itemToRemove.price * itemToRemove.quantity
                )}
              </strong>
            </div>
            <button
              type="button"
              className="review-confirm-remove"
              onClick={confirmRemove}
            >
              Remove and go back to store
            </button>
          </section>
        </div>
      )}
    </main>
  );
}
export default OrderReview;