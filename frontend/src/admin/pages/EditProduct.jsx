import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import ProductForm from "../components/ProductForm";
import "../styles/addProduct.css";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  // Fetch single product
  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:9000/api/products/${id}`,
      );

      setProduct(data.product);
    } catch (error) {
      console.log(error);
      alert("Unable to load product.");
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProduct();
  }, []);
  // Update product
  const handleUpdate = async (formData) => {
    try {
      await axios.put(`http://localhost:9000/api/products/${id}`, formData);

      alert("Product Updated Successfully!");
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
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
