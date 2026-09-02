import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";
import { useCart } from "../../context/useCart";
import ModelViewer from "../ModelViewer/ModelViewer";
import view360Icon from "../../assets/icons/view360.svg";
import "./TrendingProducts.css";

function TrendingProducts() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        const { data } = await API.get("/products");

        const trending = data.products.filter((product) => product.trending);

        setProducts(trending);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTrendingProducts();
  }, []);

  const nextSlide = () => {
    if (!products.length) return;

    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (!products.length) return;

    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product, "Double");
  };

  if (!products.length) return null;

  const product = products[currentIndex];

  return (
    <section className="trending-luxury">
      <div className="luxury-heading">
        <div className="luxury-icon">✦</div>

        <h2> LUXURIOUS EDITION</h2>

        <p>Our Finest Expression of Luxury</p>
      </div>

      <div className="luxury-wrapper">
        <button className="slider-arrow left" onClick={prevSlide}>
          ❮
        </button>

      <div className="luxury-card">
  <span className="best-badge">✦ LIMITED</span>

  <div className="luxury-model">
    <div className="view360-badge">
      <div className="view360-icon">
        <img src={view360Icon} alt="360 View" />
      </div>

      <h4>360° VIEW</h4>
      <div className="view360-line" />
      <p>EXPLORE EVERY DETAIL</p>
    </div>

    <ModelViewer />
  </div>


          <div className="product-details">
            <p className="product-category">
              {product.category || "SIGNATURE COLLECTION"}
            </p>

            <h3>{product.name}</h3>
            <div className="rating">
              ★★★★★ 
              <span>
                {product.rating || 5}  ({product.reviewCount || 32})
              </span>
            </div>
          <div className="price-row">
  <h2 className="price">
    ₹{Number(product.price).toLocaleString("en-IN")}
  </h2>

  <div className="card-actions">
    <button
      className="discover-btn"
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/product/${product._id}`);
      }}
    >
      EXPLORE →
    </button>

    <button
      className="addcart-btn"
      onClick={(e) => handleAddToCart(e, product)}
    >
      🛍
    </button>
  </div>
</div>
          </div>
        </div>

        <button className="slider-arrow right" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </section>
  );
}

export default TrendingProducts;
