import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import DiscoverCollections from "../components/DiscoverCollections/DiscoverCollections";
import AnnouncementStrip from "../components/AnnouncementStrip/AnnouncementStrip";
import Navbar from "../components/Navbar/Navbar";
import AnnouncementBar from "../components/AnnouncementBar/AnnouncementBar";
import ShopByCategory from "../components/ShopByCategory/ShopByCategory";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import FilterBar from "../components/FilterBar/FilterBar";
import AiRoomPreview from "../components/AiRoomPreview/AiRoomPreview";
import Footer from "../components/Footer/Footer";
import subcategories from "../constants/subcategories";

import "../styles/collection.css";

export default function Collection() {
  const { slug } = useParams();
  const [sortOption, setSortOption] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("");

  const collectionData = {
    bedsheets: {
      title: "Royal Floral Bedsheets",
      label: "JAIPURI COLLECTIONS",
      badges: ["100% Cotton", "Handcrafted", "Premium Quality"],
    },

    suits: {
      title: "Festive Grace Suits",
      label: "JAIPURI COLLECTIONS",
      badges: ["Elegant Designs", "Premium Fabric", "Festive Wear"],
    },

    lehengas: {
      title: "Timeless Elegance Lehengas",
      label: "JAIPURI COLLECTIONS",
      badges: ["Luxury Collection", "Handcrafted", "Premium Quality"],
    },

    dohars: {
      title: "All Season Comfort Dohars",
      label: "JAIPURI COLLECTIONS",
      badges: ["Soft Cotton", "Lightweight", "Premium Comfort"],
    },
  };

  const currentCollection = collectionData[slug] || collectionData.bedsheets;
  const categoryKey =
    slug === "bedsheets"
      ? "Bedsheets"
      : slug === "dohars"
        ? "Dohars"
        : slug === "suits"
          ? "Suits"
          : "Lehengas";

  const currentCategories = subcategories[categoryKey] || [];

  const [isLoaded, setIsLoaded] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [productCount, setProductCount] = useState(0);

  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(false);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowPlayButton(false);
    setSelectedCategory("");
  }, [slug]);

  const handleVideoLoad = async () => {
    setIsLoaded(true);

    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
    } catch {
      setShowPlayButton(true);
    }
  };

  const handleManualPlay = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setShowPlayButton(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <AnnouncementStrip />

      <section className="collection-page">
        {/* HERO */}

        <div className="collection-hero">
          <img
            className="hero-media"
            src="/images/collection-poster.jpg"
            alt={currentCollection.title}
            style={{
              opacity: isLoaded ? 0 : 1,
              position: "absolute",
              inset: 0,
            }}
          />

          <video
            ref={videoRef}
            className="hero-media"
            src="/videos/collection-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            controls={false}
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            onLoadedData={handleVideoLoad}
            style={{
              opacity: isLoaded ? 1 : 0,
            }}
          />

          {showPlayButton && (
            <button
              type="button"
              className="video-play-btn"
              onClick={handleManualPlay}
            />
          )}

          <div className="overlay" />

          <div className="hero-content">
            <p className="collection-label">{currentCollection.label}</p>

            <h1>{currentCollection.title}</h1>

            <div className="collection-badges">
              {currentCollection.badges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </div>
        </div>

        {/* SHOP BY CATEGORY */}

        <ShopByCategory
          categories={currentCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* FILTER */}

        <FilterBar
          productCount={productCount}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        <ProductGrid
          category={slug}
          selectedCategory={selectedCategory}
          sortOption={sortOption}
          setProductCount={setProductCount}
        />

        {/* MORE COLLECTIONS */}

        <DiscoverCollections currentCategory={slug} />

        {/* AI PREVIEW */}

        {slug === "bedsheets" && <AiRoomPreview />}

        {/* FOOTER */}

        <Footer />
      </section>
    </>
  );
}
