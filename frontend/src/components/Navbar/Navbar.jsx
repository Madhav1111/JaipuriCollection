import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

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

        <div className="nav-spacer"></div>
      </header>

      {/* SIDE MENU */}
      <div className={`side-menu ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </button>

        <nav className="menu-links">
          <a href="#" className="menu-card" onClick={() => setOpen(false)}>
            🛍️ Sarees
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
