import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const total = cart.reduce((sum, item) => sum + item.quantity, 0);

      setCartCount(total);
    };

    updateCartCount();

    window.addEventListener("storage", updateCartCount);

    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <>
      {/* NAVBAR */}

      <header className="navbar">
        <button className="menu-btn" onClick={() => setOpen(true)}>
          <span className="menu-icon">☰</span>
          <span className="menu-text">MENU</span>
        </button>

        {/* LOGO */}

        <div className="logo-wrapper">
          <img
            src="/images/logo.png"
            alt="Jaipuri Collections"
            className="logo"
          />
        </div>

        {/* CART */}

        <div className="cart-icon-wrapper" onClick={() => navigate("/cart")}>
          <button className="cart-btn">🛒</button>

          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </header>

      {/* SIDE MENU */}

      <div className={`side-menu ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </button>

        <nav className="menu-links">
          <a href="#" className="menu-card" onClick={() => setOpen(false)}>
            🛍️ Lehnghas
          </a>

          <a href="#" className="menu-card" onClick={() => setOpen(false)}>
            👗 Suits
          </a>

          <a href="#" className="menu-card" onClick={() => setOpen(false)}>
            🛏️ Bedsheets
          </a>

          <a href="#" className="menu-card" onClick={() => setOpen(false)}>
            ✨ New Arrivals
          </a>

          <a href="#" className="menu-card" onClick={() => setOpen(false)}>
            📞 Contact Us
          </a>
        </nav>
      </div>

      {/* BACKDROP */}

      {open && <div className="backdrop" onClick={() => setOpen(false)} />}
    </>
  );
}

export default Navbar;
