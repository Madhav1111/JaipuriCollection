import "./ProductGrid.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      {/* Image */}
      <div className="product-image-wrapper">

        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />

        {/* Badge */}
        <span className="product-badge">
          {product.badge}
        </span>

        {/* Wishlist */}
        <button className="wishlist-btn">
          ♡
        </button>

      </div>

      {/* Details */}
      <div className="product-info">

        <h3>{product.title}</h3>

        <p className="product-meta">
          {product.fabric} • {product.threadCount}
        </p>

        <div className="product-bottom">

          <div className="product-price">
            ₹{product.price}
          </div>

          <button className="add-cart-btn">
            +
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;