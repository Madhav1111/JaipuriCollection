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
          src="/images/bedsheet.jpg"
          alt=""
          className="thumbnail active"
        />

        <img
          src="/images/bedsheet.jpg"
          alt=""
          className="thumbnail"
        />

        <img
          src="/images/bedsheet.jpg"
          alt=""
          className="thumbnail"
        />

        <img
          src="/images/bedsheet.jpg"
          alt=""
          className="thumbnail"
        />

        <img
          src="/images/bedsheet.jpg"
          alt=""
          className="thumbnail"
        />

        <img
          src="/images/bedsheet.jpg"
          alt=""
          className="thumbnail"
        />

      </div>

    </section>
  );
}

export default ProductGallery;