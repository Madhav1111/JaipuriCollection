import { useState } from "react";
import "../styles/cart.css";

function Cart() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const updateQuantity = (id, change) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.max(
              1,
              item.quantity + change
            ),
          }
        : item
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const subtotal = cart.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  return (
    <main className="cart-page">

      {/* ================================
          HEADER
      ================================= */}

      <div className="cart-header">
        <p>YOUR SHOPPING BAG</p>
        <h1>My Cart</h1>
      </div>

      {/* ================================
          CART ITEMS
      ================================= */}

      <section className="cart-items">

        {cart.length === 0 ? (

          <div className="empty-cart">
            <h2>Your cart is empty</h2>

            <p>
              Discover something beautiful from
              our Jaipuri collection.
            </p>
          </div>

        ) : (

          cart.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              <div className="cart-item-image">
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="cart-item-details">

                <span className="cart-collection">
                  ROYAL COLLECTION
                </span>

                <h2>
                  {item.title}
                </h2>

                <p className="cart-size">
                  Size:{" "}
                  <strong>
                    {item.selectedSize || "Double"}
                  </strong>
                </p>

                <div className="cart-price">
                  <strong>
                    ₹{Number(item.price).toLocaleString("en-IN")}
                  </strong>

                  {item.oldPrice && (
                    <span>
                      ₹{Number(item.oldPrice).toLocaleString("en-IN")}
                    </span>
                  )}
                </div>

                {/* QUANTITY */}

                <div className="cart-bottom">

                  <div className="cart-quantity">

                    <button
                      onClick={() =>
                        updateQuantity(item.id, -1)
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(item.id, 1)
                      }
                    >
                      +
                    </button>

                  </div>

                  <button
                    className="remove-cart-item"
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>

          ))

        )}

      </section>

      {/* ================================
          ORDER SUMMARY
      ================================= */}

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

            <span className="free-delivery">
              FREE
            </span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span>Total</span>

            <strong>
              ₹{subtotal.toLocaleString("en-IN")}
            </strong>
          </div>

          <button
            className="checkout-btn"
            onClick={() =>
              (window.location.href = "/checkout")
            }
          >
            Proceed to Checkout →
          </button>

          <p className="secure-checkout">
            🔒 Secure & Safe Checkout
          </p>

        </section>

      )}

    </main>
  );
}

export default Cart;