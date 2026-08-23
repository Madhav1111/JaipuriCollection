import "../styles/products.css";

function Products() {
  const products = [
    {
      id: 1,
      name: "Royal Floral Bedsheet",
      category: "Bedsheets",
      price: 2499,
      image: "https://via.placeholder.com/300x250",
      trending: true,
      featured: true,
    },
    {
      id: 2,
      name: "Heritage Blue",
      category: "Bedsheets",
      price: 1999,
      image: "https://via.placeholder.com/300x250",
      trending: false,
      featured: true,
    },
  ];

  return (
    <div className="products-page">
      <div className="products-header">
        <div>
          <h1>Luxury Products</h1>
          <p>Manage your Jaipuri Collections catalogue</p>
        </div>

        <button className="add-btn">+ Add Product</button>
      </div>
      <div className="products-topbar">
        <input
          type="text"
          placeholder="🔍 Search products..."
          className="search-box"
        />
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <div className="product-content">
              <h2>{product.name}</h2>

              <p>{product.category}</p>

              <h3>₹ {product.price}</h3>

              <div className="badge-container">
                {product.trending && <span className="badge">🔥 Trending</span>}

                {product.featured && <span className="badge">⭐ Featured</span>}
              </div>

              <div className="product-actions">
                <button className="edit-btn">Edit</button>

                <button className="delete-btn">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
