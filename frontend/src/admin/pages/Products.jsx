import { useEffect, useState } from "react";
import API from "../../api/api";
import "../styles/products.css";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  // Fetch products from backend
  const fetchProducts = async () => {
    setLoading(true);

    try {
      const { data } = await API.get("/products");

setProducts(data.products || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/products/${id}`);

      alert("Product deleted successfully!");

      fetchProducts();
    } catch (error) {
      console.log(error);
      alert("Unable to delete product.");
    }
  };

  // Run once when page loads
  useEffect(() => {
    const loadProducts = async () => {
      await fetchProducts();
    };

    loadProducts();
  }, []);

  // Search filter
  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="products-page">
      <div className="products-header">
        <div>
          <h1>Luxury Products</h1>
          <p>Manage your Jaipuri Collections catalogue</p>
        </div>

        <button
          className="add-btn"
          onClick={() => navigate("/admin/products/add")}
        >
          + Add Product
        </button>
      </div>

      <input
        type="text"
        className="search-box"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="products-grid">
          {filteredProducts.length === 0 ? (
            <h3>No products found.</h3>
          ) : (
            filteredProducts.map((product) => (
              <div className="product-card" key={product._id}>
                <img
                  src={
                    product.images && product.images.length > 0
                      ? product.images[0]
                      : "https://via.placeholder.com/300x300?text=No+Image"
                  }
                  alt={product.name}
                />

                <h3>{product.name}</h3>

                <p className="category">{product.category}</p>

                <h2>₹{product.price}</h2>

                <div className="badges">
                  {product.trending && (
                    <span className="badge trending">🔥 Trending</span>
                  )}

                  {product.featured && (
                    <span className="badge featured">⭐ Featured</span>
                  )}
                </div>

                <div className="buttons">
                  <button
                    className="edit-btn"
                    onClick={() =>
                      navigate(`/admin/products/edit/${product._id}`)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
