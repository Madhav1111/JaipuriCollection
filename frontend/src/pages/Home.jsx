import AnnouncementBar from "../components/AnnouncementBar/AnnouncementBar";
import Navbar from "../components/Navbar/Navbar";
import AnnouncementStrip from "../components/AnnouncementStrip/AnnouncementStrip";
import Hero from "../components/Hero/Hero";
import SignatureCollections from "../components/SignatureCollections/SignatureCollections";

import TrendingProducts from "../components/TrendingProducts/TrendingProducts";
import BrandHighlights from "../components/BrandHighlights/BrandHighlights";
import InstagramGallery from "../components/InstagramGallery/InstagramGallery";

function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <AnnouncementStrip />
      <Hero />
      <SignatureCollections />
      <TrendingProducts />
      <InstagramGallery />
      <BrandHighlights />
    </>
  );
}

export default Home;
