import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";
import "../styles/productdetails.css";

function ProductDetails() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

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

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        products
          .map((product) =>
            typeof product.category === "object"
              ? product.category?.name
              : product.category,
          )
          .filter(Boolean),
      ),
    ];

    return ["All", ...uniqueCategories];
  }, [products]);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => {
          const category =
            typeof product.category === "object"
              ? product.category?.name
              : product.category;

          return category === selectedCategory;
        });

  if (loading) {
    return (
      <div className="admin-productdetails-page">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="admin-productdetails-page">
      <div className="admin-productdetails-header">
        <h1>📝 Product Details</h1>

        <p>
          Select a product to manage its product detail sections.
        </p>
      </div>

      <div className="admin-productdetails-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="admin-productdetails-empty">
          No products found.
        </div>
      ) : (
        <div className="admin-productdetails-grid">
          {filteredProducts.map((product) => (
            <div
              className="admin-productdetails-card"
              key={product._id}
            >
              <img
                src={
                  product.images?.length > 0
                    ? product.images[0]
                    : "/images/placeholder.jpg"
                }
                alt={product.name}
              />

              <div className="admin-productdetails-content">
                <h3>{product.name}</h3>

                <p className="admin-productdetails-price">
                  ₹{Number(product.price).toLocaleString("en-IN")}
                </p>

                <button
                  className="admin-productdetails-btn"
                  onClick={() =>
                    navigate(`/admin/product-details/${product._id}`)
                  }
                >
                  Provide Product Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductDetails;