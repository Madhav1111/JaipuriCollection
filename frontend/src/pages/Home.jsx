import AnnouncementBar from "../components/AnnouncementBar/AnnouncementBar";
import Navbar from "../components/Navbar/Navbar";
import AnnouncementStrip from "../components/AnnouncementStrip/AnnouncementStrip";
import Hero from "../components/Hero/Hero";

function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <AnnouncementStrip />
      <Hero />
    </>
  );
}

export default Home;
