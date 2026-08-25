import { useState } from "react";

const ProductForm = ({ onSubmit, initialData = {}, buttonText = "Save Product" }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    category: initialData.category || "",
    price: initialData.price || "",
    stock: initialData.stock || "",
    description: initialData.description || "",
    featured: initialData.featured || false,
    trending: initialData.trending || false,
    bestSeller: initialData.bestSeller || false,
    newArrival: initialData.newArrival || false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>

      <div className="form-group">
        <label>Product Name</label>
        <input
          type="text"
          name="name"
          placeholder="Royal Floral Bedsheet"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option>Bedsheets</option>
            <option>Quilts</option>
            <option>Cushion Covers</option>
            <option>Blankets</option>
            <option>Curtains</option>
          </select>
        </div>

        <div className="form-group">
          <label>Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
          />
        </div>

      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          rows="5"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Product Images</label>
        <input type="file" multiple />
      </div>

      <div className="checkbox-grid">

        <label>
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
          />
          Featured Product
        </label>

        <label>
          <input
            type="checkbox"
            name="trending"
            checked={formData.trending}
            onChange={handleChange}
          />
          Trending Product
        </label>

        <label>
          <input
            type="checkbox"
            name="bestSeller"
            checked={formData.bestSeller}
            onChange={handleChange}
          />
          Best Seller
        </label>

        <label>
          <input
            type="checkbox"
            name="newArrival"
            checked={formData.newArrival}
            onChange={handleChange}
          />
          New Arrival
        </label>

      </div>

      <button className="save-btn" type="submit">
        {buttonText}
      </button>

    </form>
  );
};

export default ProductForm;