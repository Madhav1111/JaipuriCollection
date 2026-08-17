import ProductCard from "./ProductCard";
import "./ProductGrid.css";

function ProductGrid({ category }) {
  const products = {
    bedsheets: [
      {
        id: 1,
        image: "/images/products/product1.jpg",
        badge: "BEST SELLER",
        title: "Royal Floral Bedsheet Set",
        fabric: "100% Cotton",
        threadCount: "300 TC",
        price: "2,499",
      },
      {
        id: 2,
        image: "/images/products/product2.jpg",
        badge: "NEW ARRIVAL",
        title: "Heritage Blue Bedsheet Set",
        fabric: "100% Cotton",
        threadCount: "300 TC",
        price: "2,599",
      },
      {
        id: 3,
        image: "/images/products/product3.jpg",
        badge: "LIMITED",
        title: "Vintage Lotus Bedsheet Set",
        fabric: "100% Cotton",
        threadCount: "300 TC",
        price: "2,399",
      },
      {
        id: 4,
        image: "/images/products/product4.jpg",
        badge: "BEST SELLER",
        title: "Blush Bloom Bedsheet Set",
        fabric: "100% Cotton",
        threadCount: "300 TC",
        price: "2,499",
      },
    ],

    suits: [
      {
        id: 5,
        image: "/images/products/suit1.jpg",
        badge: "NEW",
        title: "Festive Grace Suit",
        fabric: "Cotton",
        threadCount: "Printed",
        price: "1,999",
      },
      {
        id: 6,
        image: "/images/products/suit2.jpg",
        badge: "PREMIUM",
        title: "Royal Anarkali Suit",
        fabric: "Cotton",
        threadCount: "Hand Block",
        price: "2,499",
      },
    ],

    lehengas: [
      {
        id: 7,
        image: "/images/products/lehenga1.jpg",
        badge: "LUXURY",
        title: "Bridal Heritage Lehenga",
        fabric: "Silk Blend",
        threadCount: "Embroidery",
        price: "7,999",
      },
      {
        id: 8,
        image: "/images/products/lehenga2.jpg",
        badge: "BEST SELLER",
        title: "Royal Wedding Lehenga",
        fabric: "Silk",
        threadCount: "Premium",
        price: "8,499",
      },
    ],

    dohars: [
      {
        id: 9,
        image: "/images/products/dohar1.jpg",
        badge: "SOFT",
        title: "Premium Cotton Dohar",
        fabric: "Muslin Cotton",
        threadCount: "3 Layer",
        price: "1,799",
      },
      {
        id: 10,
        image: "/images/products/dohar2.jpg",
        badge: "NEW",
        title: "Floral Summer Dohar",
        fabric: "Cotton",
        threadCount: "Lightweight",
        price: "1,999",
      },
    ],
  };

  const displayProducts = products[category] || products.bedsheets;

  return (
    <section className="product-grid-section">
      <div className="product-grid">
        {displayProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;