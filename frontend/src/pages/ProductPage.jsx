import AnnouncementBar from "../components/AnnouncementBar/AnnouncementBar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProductGallery from "../components/ProductGallery/ProductGallery";
import ProductInfo from "../components/ProductInfo/ProductInfo";

import "../styles/productpage.css";

function ProductPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="product-page">
        <ProductGallery />

        <ProductInfo />

        {/* Feature Cards */}

        {/* Size Selector */}

        {/* Quantity Selector */}

        {/* Product Features */}

        {/* What's Included */}

        {/* Fabric Details */}

        {/* Care Instructions */}

        {/* Related Products */}
      </main>

      <Footer />
    </>
  );
}

export default ProductPage;
