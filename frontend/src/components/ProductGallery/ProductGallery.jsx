import { useState } from "react";
import { useWishlist } from "../../context/useWishlist";
import "./ProductGallery.css";
function ProductGallery({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const { toggleWishlist, isWishlisted } = useWishlist();
  const isFavorite = isWishlisted(product._id);
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
  const images = product.images?.length
    ? product.images
    : ["/images/placeholder.jpg"];
  const handleWishlistClick = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };
  return (
    <section className="product-gallery">
      <div className="gallery-main">
        <img
          src={images[selectedImage] || images[0]}
          alt={product.name}
          className="main-image"
        />
        {badge && <div className="product-badge">{badge}</div>}
        <button
          type="button"
          className={`wishlist-btn ${isFavorite ? "active" : ""}`}
          onClick={handleWishlistClick}
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={isFavorite}
        >
          {isFavorite ? "♥️" : "♡"}
        </button>
        {product.images?.length > 0 && (
          <div className="image-count">
            {selectedImage + 1} / {product.images.length}
          </div>
        )}
      </div>
      {product.images?.length > 1 && (
        <div className="thumbnail-row">
          {product.images.map((image, index) => (
            <button
              type="button"
              key={`${image}-${index}`}
              className={`thumbnail ${selectedImage === index ? "active" : ""}`}
              onClick={() => setSelectedImage(index)}
              aria-label={`View image ${index + 1}`}
            >
              <img src={image} alt={`${product.name} ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
export default ProductGallery;
