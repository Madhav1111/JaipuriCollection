import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api/api";

import ProductForm from "../components/ProductForm";
import "../styles/addProduct.css";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  // Load product when page opens
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const { data } = await API.get(`/products/${id}`);

        setProduct(data.product);
      } catch (error) {
        console.log(error);
        alert("Unable to load product.");
      }
    };

    loadProduct();
  }, [id]);

  // Update product
 const handleUpdate = async (formData) => {
  try {
    console.log("Sending:", formData);

    const response = await API.put(`/products/${id}`, formData);

    console.log("Response:", response.data);

    alert("Product Updated Successfully!");
    navigate("/admin/products");
  } catch (error) {
    console.log("ERROR:", error);
    console.log("SERVER:", error.response?.data);

    alert("Unable to update product.");
  }
};

  if (!product) {
    return (
      <div className="add-product-page">
        <h2 style={{ color: "white", textAlign: "center" }}>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="add-product-page">
      <div className="add-product-container">
        <div className="page-header">
          <h1>Edit Product</h1>
          <p>Update your luxury product</p>
        </div>

        <ProductForm
          initialData={product}
          onSubmit={handleUpdate}
          buttonText="Update Product"
        />
      </div>
    </div>
  );
};

export default EditProduct;
