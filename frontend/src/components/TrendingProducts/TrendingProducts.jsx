import { useEffect, useState } from "react";
import API from "../../api/api";
import "./TrendingProducts.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/useCart";

function TrendingProducts() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
       const { data } = await API.get("/products");

        setProducts(
          data.products.filter((product) => product.trending)
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingProducts();
  }, []);

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

          {products.map((product) => (
            <article
              className="luxury-card"
              key={product._id}
              onClick={() => navigate(`/product/${product._id}`)}
            >

              <span className="product-badge">
                ✦ {product.bestSeller ? "BEST SELLER" : "TRENDING"}
              </span>

              <button
                className="wishlist-btn"
                onClick={(e) => e.stopPropagation()}
              >
                ♡
              </button>

              <div className="product-image-wrap">

                <img
                  src={
                    product.images?.length
                      ? `${import.meta.env.VITE_API_URL.replace("/api", "")}${product.images[0]}`
                      : "/images/after.webp"
                  }
                  alt={product.name}
                  className="product-image"
                />

              </div>

              <div className="product-des-info">

                <span className="product-category">
                  {product.category}
                </span>

                <h3>{product.name}</h3>

                <div className="rating">
                  ★★★★★ <span>{product.rating || 5}</span>
                </div>

                <div className="product-bottom">

                  <div>

                    <p className="price">
                      ₹{Number(product.price).toLocaleString("en-IN")}
                    </p>

                    <small>
                      {product.fabric || "Handcrafted in Jaipur"}
                    </small>

                  </div>

                  <button
                    className="plus-btn"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    +
                  </button>

                </div>

              </div>

            </article>
          ))}

        </div>

        <button className="carousel-arrow right-arrow">
          ❯
        </button>

      </div>

    </section>
  );
}

export default TrendingProducts;