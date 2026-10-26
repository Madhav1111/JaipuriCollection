import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import "./SideMenu.css";

function SideMenu({ open, setOpen }) {
  const navigate = useNavigate();

  // Prevent background scrolling when the side menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const collections = [
    {
      title: "Lehengas",
      subtitle: "Bridal • Designer • Festive",
      image: "/images/saree.jpg",
      route: "/collection/lehenga",
    },
    {
      title: "Suits",
      subtitle: "Handcrafted • Premium",
      image: "/images/suits.jpg",
      route: "/collection/suits",
    },
    {
      title: "Bedsheets",
      subtitle: "Luxury Home • Premium",
      image: "/images/bedsheet.jpg",
      route: "/collection/bedsheets",
    },
  ];

  const handleWhatsAppSupport = () => {
    const message = encodeURIComponent(
      "Hello Jaipuri Collections, I need assistance with your products or my order."
    );

    window.open(
      `https://wa.me/918872154985?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );

    setOpen(false);
  };

  return (
    <div className={`side-menu ${open ? "open" : ""}`}>
      {/* CLOSE BUTTON */}

      <button
        className="close-btn"
        onClick={() => setOpen(false)}
        aria-label="Close menu"
      >
        ✕
      </button>

      {/* BRAND HEADER */}

      <div className="menu-header">
        <img
          src="/images/logo.png"
          alt="Jaipuri Collection"
          className="menu-logo"
        />

        <p className="menu-tagline">LUXURIOUS EDITION</p>

        <div className="menu-divider">
          <span></span>✦<span></span>
        </div>
      </div>

      {/* MY ACCOUNT */}

      <div className="menu-section-title">MY ACCOUNT</div>

      <div className="account-list">
        <div
          className="account-item"
          onClick={() => {
            navigate("/login");
            setOpen(false);
          }}
        >
          <div className="account-icon">👤</div>

          <div className="account-info">
            <h4>Sign In</h4>
            <p>Access your account</p>
          </div>

          <span className="arrow">›</span>
        </div>

        <div
          className="account-item"
          onClick={() => {
            navigate("/signup");
            setOpen(false);
          }}
        >
          <div className="account-icon">＋</div>

          <div className="account-info">
            <h4>Create Account</h4>
            <p>Join Jaipuri Collection</p>
          </div>

          <span className="arrow">›</span>
        </div>
      </div>

      {/* COLLECTIONS */}

      <div className="menu-section-title">COLLECTIONS</div>

      <div className="premium-collection-list">
        {collections.map((item) => (
          <div
            key={item.title}
            className="premium-collection-card"
            onClick={() => {
              navigate(item.route);
              setOpen(false);
            }}
          >
            <img src={item.image} alt={item.title} />

            <div className="premium-collection-info">
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>

            <span className="collection-arrow">›</span>
          </div>
        ))}
      </div>

      {/* SUPPORT */}

      <div className="menu-section-title">SUPPORT</div>

      <div className="premium-support-grid">
        <button
          className="premium-support-item"
          onClick={() => {
            navigate("/contact");
            setOpen(false);
          }}
        >
          <span className="premium-support-icon">📞</span>
          <p>Contact Us</p>
        </button>

        <button
          className="premium-support-item"
          onClick={() => {
            navigate("/track-order");
            setOpen(false);
          }}
        >
          <span className="premium-support-icon">📦</span>
          <p>Track Order</p>
        </button>

        {/* WHATSAPP SUPPORT */}

        <button
          className="premium-support-item"
          onClick={handleWhatsAppSupport}
        >
          <span className="premium-support-icon">
            <FaWhatsapp />
          </span>
          <p>WhatsApp Support</p>
        </button>
      </div>

      {/* FOOTER */}

      <div className="premium-menu-footer">
        <span>TIMELESS INDIAN LUXURY</span>
      </div>
    </div>
  );
}

export default SideMenu;