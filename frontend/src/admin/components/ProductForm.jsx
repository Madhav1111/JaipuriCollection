import { useState } from "react";

const ProductForm = ({
  onSubmit,
  initialData = {},
  buttonText = "Save Product",
}) => {
  const categories = ["Bedsheets", "Dohars", "Suits", "Lehengas"];

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
    images: initialData.images || [],
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

    const data = new FormData();

    data.append("name", formData.name);
    data.append("category", formData.category);
    data.append("price", formData.price);
    data.append("stock", formData.stock);
    data.append("description", formData.description);

    data.append("featured", formData.featured);
    data.append("trending", formData.trending);
    data.append("bestSeller", formData.bestSeller);
    data.append("newArrival", formData.newArrival);

    // Upload only newly selected files
    for (const image of formData.images) {
      if (image instanceof File) {
        data.append("images", image);
      }
    }

    onSubmit(data);
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

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
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

        <input
          type="file"
          multiple
          onChange={(e) =>
            setFormData({
              ...formData,
              images: [...e.target.files],
            })
          }
        />

        {formData.images.length > 0 &&
          typeof formData.images[0] === "string" && (
            <img
              src={formData.images[0]}
              alt="Product"
              width="120"
              style={{ marginTop: "10px", borderRadius: "8px" }}
            />
          )}
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
