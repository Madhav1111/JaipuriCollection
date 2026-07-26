import ProductCard from "./ProductCard";
import "./ProductGrid.css";

const products = [
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
    badge: "PREMIUM",
    title: "Sage Garden Bedsheet Set",
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
];

function ProductGrid() {
  return (
    <section className="product-grid-section">
      <div className="product-grid">
        {products.map((product) => (
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