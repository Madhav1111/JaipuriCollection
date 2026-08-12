import AnnouncementBar from "../components/AnnouncementBar/AnnouncementBar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProductGallery from "../components/ProductGallery/ProductGallery";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import YouMayAlsoLike from "../components/YouMayAlsoLike/YouMayAlsoLike";
import CustomerReviews from "../components/CustomerReviews/CustomerReviews";

import "../styles/productpage.css";

function ProductPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="product-page">
        <ProductGallery />

        <ProductInfo />
        <YouMayAlsoLike />
        <CustomerReviews />
      </main>

      <Footer />
    </>
  );
}

export default ProductPage;
