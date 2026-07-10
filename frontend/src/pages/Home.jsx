import AnnouncementBar from "../components/AnnouncementBar/AnnouncementBar";
import Navbar from "../components/Navbar/Navbar";
import AnnouncementStrip from "../components/AnnouncementStrip/AnnouncementStrip";
import Hero from "../components/Hero/Hero";
import SignatureCollections from "../components/SignatureCollections/SignatureCollections";
import AIRoomPreview from "../components/AiRoomPreview/AiRoomPreview";

function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <AnnouncementStrip />
      <Hero />
      <SignatureCollections />
      <AIRoomPreview />
    </>
  );
}

export default Home;
