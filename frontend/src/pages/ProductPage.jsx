import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import AnnouncementBar from "../components/AnnouncementBar/AnnouncementBar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProductGallery from "../components/ProductGallery/ProductGallery";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import YouMayAlsoLike from "../components/YouMayAlsoLike/YouMayAlsoLike";
import CustomerReviews from "../components/CustomerReviews/CustomerReviews";

import "../styles/productpage.css";

function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:9000/api/products/${id}`
        );

        setProduct(data.product);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="product-page">
        <ProductGallery product={product} />

        <ProductInfo product={product} />

        <YouMayAlsoLike />

        <CustomerReviews />
      </main>

      <Footer />
    </>
  );
}

export default ProductPage;