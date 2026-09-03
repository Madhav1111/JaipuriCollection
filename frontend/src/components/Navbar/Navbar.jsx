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

  return (
    <>
      {/* NAVBAR */}

      <header className="navbar">
        <button
          className="menu-btn"
          onClick={() => setOpen(true)}
        >
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

        <div
          className="cart-icon-wrapper"
          onClick={() => navigate("/cart")}
        >
          <button className="cart-btn">
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

      <SideMenu
        open={open}
        setOpen={setOpen}
      />

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