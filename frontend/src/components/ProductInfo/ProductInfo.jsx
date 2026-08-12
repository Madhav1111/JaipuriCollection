import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductInfo.css";

function ProductInfo() {
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState("Double");
  const [quantity, setQuantity] = useState(1);

  const sizes = ["Single", "Double", "King", "Super King"];

  const product = {
    id: "royal-floral-bedsheet",
    title: "Royal Floral Bedsheet Set",
    price: 2499,
    oldPrice: 3499,
    image: "/images/royal-floral.jpg",
  };

  /* ================================
     ADD TO CART
  ================================= */

  const handleAddToCart = () => {
    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = existingCart.find(
      (item) =>
        item.id === product.id &&
        item.selectedSize === selectedSize
    );

    let updatedCart;

    if (existingItem) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id &&
        item.selectedSize === selectedSize
          ? {
              ...item,
              quantity: item.quantity + quantity,
            }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...product,
          selectedSize,
          quantity,
        },
      ];
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    navigate("/cart");
  };

  /* ================================
     BUY NOW
  ================================= */

  const handleBuyNow = () => {
    const buyNowItem = {
      ...product,
      selectedSize,
      quantity,
    };

    localStorage.setItem(
      "buyNowItem",
      JSON.stringify(buyNowItem)
    );

    navigate("/checkout");
  };

  return (
    <section className="product-detail-info">

      <p className="collection-name">
        ROYAL COLLECTION
      </p>

      <h1 className="product-title">
        Royal Floral Bedsheet Set
      </h1>

      <div className="rating-row">
        ⭐⭐⭐⭐⭐
        <span>4.9 (186)</span>
        <span> | </span>
        <span>200+ Happy Customers</span>
      </div>

      <div className="price-row">
        <h2>₹2,499</h2>

        <span className="old-price">
          ₹3,499
        </span>

        <span className="discount">
          29% OFF
        </span>
      </div>

      {/* ================================
          SIZE SELECTOR
      ================================= */}

      <div className="size-selector">

        <div className="size-heading">

          <h3>Select Size</h3>

          <span>
            {selectedSize}
          </span>

        </div>

        <div className="size-options">

          {sizes.map((size) => (

            <button
              key={size}
              className={`size-option ${
                selectedSize === size
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setSelectedSize(size)
              }
            >
              {size}
            </button>

          ))}

        </div>

      </div>

      {/* ================================
          QUANTITY SELECTOR
      ================================= */}

      <div className="quantity-selector">

        <h3>Quantity</h3>

        <div className="quantity-control">

          <button
            onClick={() =>
              setQuantity(
                quantity > 1
                  ? quantity - 1
                  : 1
              )
            }
          >
            −
          </button>

          <span>
            {quantity}
          </span>

          <button
            onClick={() =>
              setQuantity(quantity + 1)
            }
          >
            +
          </button>

        </div>

      </div>

      {/* ================================
          PURCHASE ACTIONS
      ================================= */}

      <div className="purchase-actions">

        <button
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          🛒 Add to Cart
        </button>

        <button
          className="buy-now-btn"
          onClick={handleBuyNow}
        >
          Buy Now →
        </button>

      </div>

      {/* ================================
          WHAT'S INCLUDED
      ================================= */}

      <div className="whats-included">

        <h3>What's Included</h3>

        <div className="included-list">

          <div className="included-item">
            <span className="included-icon">
              ▱
            </span>

            <div>
              <strong>1 Bedsheet</strong>
              <p>
                Premium Jaipuri print
              </p>
            </div>
          </div>

          <div className="included-item">
            <span className="included-icon">
              ▭
            </span>

            <div>
              <strong>
                2 Pillow Covers
              </strong>

              <p>
                Matching elegant design
              </p>
            </div>
          </div>

          <div className="included-item">
            <span className="included-icon">
              ⌑
            </span>

            <div>
              <strong>
                1 Storage Bag
              </strong>

              <p>
                Premium reusable bag
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* ================================
          FABRIC & DETAILS
      ================================= */}

      <div className="fabric-details">

        <h3>Fabric & Details</h3>

        <div className="fabric-grid">

          <div className="fabric-item">
            <span className="fabric-icon">
              ✿
            </span>

            <div>
              <strong>Material</strong>
              <p>100% Cotton</p>
            </div>
          </div>

          <div className="fabric-item">
            <span className="fabric-icon">
              ♨
            </span>

            <div>
              <strong>
                Thread Count
              </strong>

              <p>300 TC</p>
            </div>
          </div>

          <div className="fabric-item">
            <span className="fabric-icon">
              ✾
            </span>

            <div>
              <strong>Print</strong>
              <p>Jaipuri Floral</p>
            </div>
          </div>

          <div className="fabric-item">
            <span className="fabric-icon">
              ▧
            </span>

            <div>
              <strong>GSM</strong>
              <p>120 GSM</p>
            </div>
          </div>

        </div>

      </div>

      {/* ================================
          CARE INSTRUCTIONS
      ================================= */}

      <div className="care-instructions">

        <h3>Care Instructions</h3>

        <div className="care-list">

          <div className="care-item">
            <span className="care-icon">
              ▣
            </span>

            <div>
              <strong>
                Machine Wash
              </strong>

              <p>
                Cold Water
              </p>
            </div>
          </div>

          <div className="care-item">
            <span className="care-icon">
              ⚔
            </span>

            <div>
              <strong>
                Do Not Bleach
              </strong>

              <p>.</p>
            </div>
          </div>

          <div className="care-item">
            <span className="care-icon">
              ▣
            </span>

            <div>
              <strong>
                Tumble Dry
              </strong>

              <p>
                Low
              </p>
            </div>
          </div>

          <div className="care-item">
            <span className="care-icon">
              ✿
            </span>

            <div>
              <strong>
                Wash Dark Colours
              </strong>

              <p>
                Separately
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductInfo;