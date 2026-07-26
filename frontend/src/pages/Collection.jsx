import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import AnnouncementStrip from "../components/AnnouncementStrip/AnnouncementStrip";
import Navbar from "../components/Navbar/Navbar";
import AnnouncementBar from "../components/AnnouncementBar/AnnouncementBar";

import "../styles/collection.css";

export default function Collection() {
  const { slug } = useParams();

  const [isLoaded, setIsLoaded] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    setIsLoaded(false);
    setShowPlayButton(false);
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
        <div className="collection-hero">
          {/* Placeholder image */}
          <img
            className="hero-media"
            src="/images/collection-poster.jpg"
            alt="Jaipuri Collection"
            style={{
              opacity: isLoaded ? 0 : 1,
              position: "absolute",
              inset: 0,
            }}
          />

          {/* Hero Video */}
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
            <p className="collection-label">JAIPURI COLLECTIONS</p>

            <h1>Royal Floral Bedsheets</h1>

           

            <div className="collection-badges">
              <span>100% Cotton</span>
              <span>Handcrafted</span>
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
