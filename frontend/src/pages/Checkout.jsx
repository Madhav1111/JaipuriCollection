import { useState } from "react";
import { useCart } from "../context/useCart";
import "../styles/checkout.css";

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("upi");

  const { cart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="checkout-page">
      {/* ==================================
          HEADER
      ================================== */}

      <div className="checkout-header">
        <p>JAIPURI COLLECTIONS</p>
        <h1>Checkout</h1>
      </div>

      {/* ==================================
          CONTACT INFORMATION
      ================================== */}

      <section className="checkout-section">
        <div className="checkout-section-heading">
          <span>01</span>
          <h2>Contact Information</h2>
        </div>

        <div className="checkout-field">
          <label>Mobile Number</label>

          <input
            type="tel"
            placeholder="Enter your mobile number"
          />
        </div>

        <p className="checkout-note">
          We'll use this number for order updates.
        </p>
      </section>

      {/* ==================================
          DELIVERY ADDRESS
      ================================== */}

      <section className="checkout-section">
        <div className="checkout-section-heading">
          <span>02</span>
          <h2>Delivery Address</h2>
        </div>

        <div className="checkout-field">
          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
          />
        </div>

        <div className="checkout-field">
          <label>Address</label>

          <textarea
            placeholder="House / Flat No., Street, Area"
            rows="3"
          />
        </div>

        <div className="checkout-two-column">
          <div className="checkout-field">
            <label>City</label>

            <input
              type="text"
              placeholder="City"
            />
          </div>

          <div className="checkout-field">
            <label>PIN Code</label>

            <input
              type="text"
              placeholder="PIN Code"
            />
          </div>
        </div>

        <div className="checkout-field">
          <label>State</label>

          <input
            type="text"
            placeholder="State"
          />
        </div>
      </section>

      {/* ==================================
          PAYMENT
      ================================== */}

      <section className="checkout-section">
        <div className="checkout-section-heading">
          <span>03</span>
          <h2>Payment Method</h2>
        </div>

        <div className="payment-options">
          <button
            type="button"
            className={`payment-option ${
              paymentMethod === "upi" ? "active" : ""
            }`}
            onClick={() => setPaymentMethod("upi")}
          >
            <span className="payment-icon">₹</span>

            <div>
              <strong>UPI</strong>
              <p>Google Pay, PhonePe, Paytm & more</p>
            </div>

            <span className="payment-radio">
              {paymentMethod === "upi" ? "●" : "○"}
            </span>
          </button>

          <button
            type="button"
            className={`payment-option ${
              paymentMethod === "card" ? "active" : ""
            }`}
            onClick={() => setPaymentMethod("card")}
          >
            <span className="payment-icon">▣</span>

            <div>
              <strong>Credit / Debit Card</strong>
              <p>Visa, Mastercard & more</p>
            </div>

            <span className="payment-radio">
              {paymentMethod === "card" ? "●" : "○"}
            </span>
          </button>

          <button
            type="button"
            className={`payment-option ${
              paymentMethod === "cod" ? "active" : ""
            }`}
            onClick={() => setPaymentMethod("cod")}
          >
            <span className="payment-icon">📦</span>

            <div>
              <strong>Cash on Delivery</strong>
              <p>Pay when your order arrives</p>
            </div>

            <span className="payment-radio">
              {paymentMethod === "cod" ? "●" : "○"}
            </span>
          </button>
        </div>
      </section>

      {/* ==================================
          ORDER SUMMARY
      ================================== */}

      <section className="checkout-summary">
        <h2>Your Order</h2>

        {cart.map((item) => (
          <div
            className="checkout-product"
            key={`${item._id}-${item.selectedSize}`}
          >
            <div className="checkout-product-image">
              <img
              src={
  item.images?.length > 0
    ? `${import.meta.env.VITE_API_URL.replace("/api", "")}${item.images[0]}`
    : "/images/placeholder.jpg"
}
                alt={item.name}
              />
            </div>

            <div className="checkout-product-info">
              <span>{item.collection || "JAIPURI COLLECTION"}</span>

              <h3>{item.name}</h3>

              <p>
                {item.selectedSize} × {item.quantity}
              </p>

              <strong>
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
              </strong>
            </div>
          </div>
        ))}

        <div className="checkout-summary-row">
          <span>Subtotal</span>

          <strong>
            ₹{subtotal.toLocaleString("en-IN")}
          </strong>
        </div>

        <div className="checkout-summary-row">
          <span>Delivery</span>

          <strong className="free">
            FREE
          </strong>
        </div>

        <div className="checkout-divider"></div>

        <div className="checkout-summary-row">
          <span>Total</span>

          <strong>
            ₹{subtotal.toLocaleString("en-IN")}
          </strong>
        </div>

        <button className="place-order-btn">
          Place Order →
        </button>

        <p className="checkout-secure">
          🔒 Your payment information is secure
        </p>
      </section>
    </main>
  );
}

export default Checkout;