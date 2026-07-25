import "./TrendingProducts.css";

function TrendingProducts() {
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

          <article className="luxury-card">

            <span className="product-badge">
              ✦ BEST SELLER
            </span>

            <button className="wishlist-btn">
              ♡
            </button>

            <div className="product-image-wrap">

              <img
                src="/images/trending1.jpg"
                alt="Bedsheet"
                className="product-image"
              />

            </div>

            <div className="product-info">

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

                <button className="plus-btn">
                  +
                </button>

              </div>

            </div>

          </article>

          {/* ===============================
              CARD 2
          =============================== */}

          <article className="luxury-card">

            <span className="product-badge">
              ✦ LIMITED
            </span>

            <button className="wishlist-btn">
              ♡
            </button>

            <div className="product-image-wrap">

              <img
                src="/images/trending2.jpg"
                alt="Suit"
                className="product-image"
              />

            </div>

            <div className="product-info">

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

                <button className="plus-btn">
                  +
                </button>

              </div>

            </div>

          </article>

          {/* ===============================
              CARD 3
          =============================== */}

          <article className="luxury-card">

            <span className="product-badge">
              ✦ NEW
            </span>

            <button className="wishlist-btn">
              ♡
            </button>

            <div className="product-image-wrap">

              <img
                src="/images/trending3.jpg"
                alt="Saree"
                className="product-image"
              />

            </div>

            <div className="product-info">

              <span className="product-category">
                Designer Saree
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

                <button className="plus-btn">
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