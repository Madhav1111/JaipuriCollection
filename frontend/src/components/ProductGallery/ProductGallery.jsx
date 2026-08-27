import { useState } from "react";
import "./ProductGallery.css";

function ProductGallery({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);

  // Badge
  let badge = "";

  if (product.bestSeller) {
    badge = "👑 BEST SELLER";
  } else if (product.newArrival) {
    badge = "✨ NEW ARRIVAL";
  } else if (product.featured) {
    badge = "⭐ FEATURED";
  } else if (product.trending) {
    badge = "🔥 TRENDING";
  }

  return (
    <section className="product-gallery">
      {/* Main Product Image */}

      <div className="gallery-main">
        <img
          src={
  product.images?.length
    ? product.images[0]
    : "/images/placeholder.jpg"
}
          alt={product.name}
          className="main-image"
        />

        {badge && <div className="product-badge">{badge}</div>}

        <button className="wishlist-btn">♡</button>
        {product.images?.length > 0 && (
          <div className="image-count">
            {selectedImage + 1} / {product.images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Images */}

    <div className="thumbnail-row">
  {product.images?.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={product.name}
      className={`thumbnail ${selectedImage === index ? "active" : ""}`}
      onClick={() => setSelectedImage(index)}
    />
  ))}
</div>
    </section>
  );
}

export default ProductGallery;
