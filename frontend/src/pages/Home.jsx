import AnnouncementBar from "../components/AnnouncementBar/AnnouncementBar";
import Navbar from "../components/Navbar/Navbar";
import AnnouncementStrip from "../components/AnnouncementStrip/AnnouncementStrip";
import Hero from "../components/Hero/Hero";
import SignatureCollections from "../components/SignatureCollections/SignatureCollections";
import AIRoomPreview from "../components/AiRoomPreview/AiRoomPreview";
import TrendingProducts from "../components/TrendingProducts/TrendingProducts";
import BrandHighlights from "../components/BrandHighlights/BrandHighlights";

function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <AnnouncementStrip />
      <Hero />
      <SignatureCollections />
      <AIRoomPreview />
      <TrendingProducts />
      <BrandHighlights/>
    </>
  );
}

export default Home;
