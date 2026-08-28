import API from "../../api/api";
import ProductForm from "../components/ProductForm";
import "../styles/addProduct.css";

const AddProduct = () => {
  const handleAddProduct = async (formData) => {
    try {
      await API.post("/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

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
