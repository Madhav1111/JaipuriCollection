import "./TrendingProducts.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/useCart";
function TrendingProducts() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product, "Double");
  };

  return (
    <section className="trending-section">

      {/* ===============================
          HEADING
      =============================== */}

      <div className="trending-heading">

        <div className="heading-line"></div>

        <div className="heading-crown">👑</div>

        <h2>TRENDING THIS WEEK</h2>

        <p>Curated Luxury • Crafted in Jaipur</p>

        <div className="heading-line"></div>

      </div>

      {/* ===============================
          CAROUSEL
      =============================== */}

      <div className="carousel-wrapper">

        <button className="carousel-arrow left-arrow">
          ❮
        </button>

        <div className="trending-carousel">

          {/* ===============================
              CARD 1
          =============================== */}

          <article
            className="luxury-card"
            onClick={() => navigate("/product")}
          >

            <span className="product-badge">
              ✦ BEST SELLER
            </span>

            <button
              className="wishlist-btn"
              onClick={(e) => e.stopPropagation()}
            >
              ♡
            </button>

            <div className="product-image-wrap">

              <img
                src="/images/after.webp"
                alt="Bedsheet"
                className="product-image"
              />

            </div>

            <div className="product-des-info">

              <span className="product-category">
                Premium Bedsheet
              </span>

              <h3>
                Heritage Bloom
              </h3>

              <div className="rating">
                ★★★★★ <span>4.9</span>
              </div>

              <div className="product-bottom">

                <div>

                  <p className="price">
                    ₹2,499
                  </p>

                  <small>
                    Handcrafted in Jaipur
                  </small>

                </div>

                <button
                  className="plus-btn"
                  onClick={(e) =>
                    handleAddToCart(e, {
                      id: 101,
                      image: "/images/after.webp",
                      badge: "BEST SELLER",
                      title: "Heritage Bloom",
                      fabric: "100% Cotton",
                      threadCount: "300 TC",
                      price: "2499",
                    })
                  }
                >
                  +
                </button>

              </div>

            </div>

          </article>

          {/* ===============================
              CARD 2
          =============================== */}

          <article
            className="luxury-card"
            onClick={() => navigate("/product")}
          >

            <span className="product-badge">
              ✦ LIMITED
            </span>

            <button
              className="wishlist-btn"
              onClick={(e) => e.stopPropagation()}
            >
              ♡
            </button>

            <div className="product-image-wrap">

              <img
                src="/images/after.webp"
                alt="Suit"
                className="product-image"
              />

            </div>

            <div className="product-des-info">

              <span className="product-category">
                Premium Suit
              </span>

              <h3>
                Blush Garden
              </h3>

              <div className="rating">
                ★★★★★ <span>4.8</span>
              </div>

              <div className="product-bottom">

                <div>

                  <p className="price">
                    ₹2,999
                  </p>

                  <small>
                    Soft Cotton Fabric
                  </small>

                </div>

                <button
                  className="plus-btn"
                  onClick={(e) =>
                    handleAddToCart(e, {
                      id: 102,
                      image: "/images/after.webp",
                      badge: "LIMITED",
                      title: "Blush Garden",
                      fabric: "100% Cotton",
                      threadCount: "300 TC",
                      price: "2999",
                    })
                  }
                >
                  +
                </button>

              </div>

            </div>

          </article>

          {/* ===============================
              CARD 3
          =============================== */}

          <article
            className="luxury-card"
            onClick={() => navigate("/product")}
          >

            <span className="product-badge">
              ✦ NEW
            </span>

            <button
              className="wishlist-btn"
              onClick={(e) => e.stopPropagation()}
            >
              ♡
            </button>

            <div className="product-image-wrap">

              <img
                src="/images/after.webp"
                alt="Lehenga"
                className="product-image"
              />

            </div>

            <div className="product-des-info">

              <span className="product-category">
                Designer Lehengas
              </span>

              <h3>
                Royal Raani
              </h3>

              <div className="rating">
                ★★★★★ <span>5.0</span>
              </div>

              <div className="product-bottom">

                <div>

                  <p className="price">
                    ₹3,499
                  </p>

                  <small>
                    Limited Collection
                  </small>

                </div>

                <button
                  className="plus-btn"
                  onClick={(e) =>
                    handleAddToCart(e, {
                      id: 103,
                      image: "/images/after.webp",
                      badge: "NEW",
                      title: "Royal Raani",
                      fabric: "Premium Fabric",
                      threadCount: "Designer",
                      price: "3499",
                    })
                  }
                >
                  +
                </button>

              </div>

            </div>

          </article>

        </div>

        <button className="carousel-arrow right-arrow">
          ❯
        </button>

      </div>

    </section>
  );
}

export default TrendingProducts;