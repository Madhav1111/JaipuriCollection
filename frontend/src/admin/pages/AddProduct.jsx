import axios from "axios";
import ProductForm from "../components/ProductForm";
import "../styles/addProduct.css";

const AddProduct = () => {
 const handleAddProduct = async (data) => {
  try {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    formData.append("description", data.description);

    formData.append("featured", data.featured);
    formData.append("trending", data.trending);
    formData.append("bestSeller", data.bestSeller);
    formData.append("newArrival", data.newArrival);

    data.images.forEach((image) => {
      formData.append("images", image);
    });

    await axios.post(
      "http://localhost:9000/api/products",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    alert("Product Added Successfully!");
  } catch (error) {
    console.error(error);
    alert("Error adding product.");
  }
};

  return (
    <div className="add-product-page">
      <div className="add-product-container">
        <div className="page-header">
          <h1>Add New Product</h1>
          <p>Create a new luxury product for Jaipuri Collections</p>
        </div>

        <ProductForm onSubmit={handleAddProduct} buttonText="Save Product" />
      </div>
    </div>
  );
};

export default AddProduct;
