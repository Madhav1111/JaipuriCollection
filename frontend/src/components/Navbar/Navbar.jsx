import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/useCart";

import SideMenu from "./SideMenu";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleLogoClick = () => {
    setOpen(false);
    navigate("/");
  };

  const handleLogoKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleLogoClick();
    }
  };

  return (
    <>
      <header className="navbar">
        {/* MENU */}
        <button
          type="button"
          className="menu-btn"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span className="menu-icon">☰</span>
          <span className="menu-text">MENU</span>
        </button>

        {/* CLICKABLE LOGO */}
        <div
          className="logo-wrapper"
          onClick={handleLogoClick}
          onKeyDown={handleLogoKeyDown}
          role="link"
          tabIndex={0}
          aria-label="Go to Jaipuri Collections home page"
        >
          <img
            src="/images/logo.png"
            alt="Jaipuri Collections"
            className="logo"
          />
        </div>

        {/* CART */}
        <div
          className="cart-icon-wrapper"
          onClick={() => navigate("/cart")}
        >
          <button
            type="button"
            className="cart-btn"
            aria-label="Open shopping cart"
          >
            🛒
          </button>

          {cartCount > 0 && (
            <span className="cart-badge">
              {cartCount}
            </span>
          )}
        </div>
      </header>

      {/* SIDE MENU */}
      <SideMenu open={open} setOpen={setOpen} />

      {/* BACKDROP */}
      {open && (
        <div
          className="backdrop"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;