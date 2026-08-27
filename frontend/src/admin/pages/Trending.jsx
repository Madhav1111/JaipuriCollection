import { useEffect, useState } from "react";
import API from "../../api/api";
import "../styles/trending.css";

function Trending() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await API.get("/products");

        setProducts(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleTrending = async (product) => {
    try {
     await API.put(`/products/${product._id}`, {
  trending: !product.trending,
});

      setProducts((prevProducts) =>
        prevProducts.map((item) =>
          item._id === product._id
            ? {
                ...item,
                trending: !item.trending,
              }
            : item
        )
      );
    } catch (error) {
      console.log(error);
      alert("Failed to update trending status.");
    }
  };

  if (loading) {
    return (
      <div className="admin-trending-page">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="admin-trending-page">
      <div className="admin-trending-header">
        <h1>🔥 Trending Products</h1>

        <p>
          Select which products should appear on the homepage
          Trending section.
        </p>
      </div>

      {products.length === 0 ? (
        <div className="admin-empty-products">
          No products found.
        </div>
      ) : (
        <div className="admin-trending-grid">
          {products.map((product) => (
            <div
              className="admin-trending-card"
              key={product._id}
            >
            <img
  src={
    product.images?.length > 0
      ? `${import.meta.env.VITE_API_URL.replace("/api", "")}${product.images[0]}`
      : "/images/placeholder.jpg"
  }
  alt={product.name}
/>

              <div className="admin-card-content">
                <h3>{product.name}</h3>

                <p className="admin-price">
                  ₹{Number(product.price).toLocaleString("en-IN")}
                </p>

                <button
                  className={
                    product.trending
                      ? "admin-toggle-btn active"
                      : "admin-toggle-btn"
                  }
                  onClick={() => toggleTrending(product)}
                >
                  {product.trending
                    ? "🔥 Trending"
                    : "Add to Trending"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Trending;