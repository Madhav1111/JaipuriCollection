import "./ProductGallery.css";

function ProductGallery() {
  return (
    <section className="product-gallery">

      {/* Main Product Image */}

      <div className="gallery-main">

        <img
          src="images/bedsheet.jpg"
          alt="Royal Floral Bedsheet"
          className="main-image"
        />

        <div className="product-badge">
          👑 BEST SELLER
        </div>

        <button className="wishlist-btn">
          ♡
        </button>

        

        <div className="image-count">
          1 / 6
        </div>

      </div>

      {/* Thumbnail Images */}

      <div className="thumbnail-row">

        <img
          src="/images/products/royal-floral/thumb1.jpg"
          alt=""
          className="thumbnail active"
        />

        <img
          src="/images/products/royal-floral/thumb2.jpg"
          alt=""
          className="thumbnail"
        />

        <img
          src="/images/products/royal-floral/thumb3.jpg"
          alt=""
          className="thumbnail"
        />

        <img
          src="/images/products/royal-floral/thumb4.jpg"
          alt=""
          className="thumbnail"
        />

        <img
          src="/images/products/royal-floral/thumb5.jpg"
          alt=""
          className="thumbnail"
        />

        <img
          src="/images/products/royal-floral/thumb6.jpg"
          alt=""
          className="thumbnail"
        />

      </div>

    </section>
  );
}

export default ProductGallery;