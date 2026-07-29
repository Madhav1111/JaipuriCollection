import { useEffect, useRef } from "react";
import "./InstagramGallery.css";

const reels = [
  {
    id: 1,
    video: "/videos/reel1.mp4",
    title: "Royal comfort\nin every detail",
    views: "2.4K views",
  },
  {
    id: 2,
    video: "/videos/reel2.mp4",
    title: "Timeless prints.\nHandcrafted with love.",
    views: "3.8K views",
    featured: true,
  },
  {
    id: 3,
    video: "/videos/reel3.mp4",
    title: "New arrivals\njust for you ✨",
    views: "1.9K views",
  },
];

function InstagramGallery() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const featuredCard = slider.querySelector(".featured");

    if (!featuredCard) return;

    slider.scrollLeft =
      featuredCard.offsetLeft -
      (slider.offsetWidth - featuredCard.offsetWidth) / 2;
  }, []);

  return (
    <section className="instagram-section">
      {/* Heading */}

      <div className="instagram-heading">
        <div className="heading-line"></div>

        <span className="heading-top">✦ FOLLOW OUR JOURNEY ✦</span>

        <h2>Instagram Reels</h2>

        <div className="heading-divider">✦</div>

        <p>
          Watch our latest Jaipuri collections, new arrivals & behind the
          scenes.
        </p>
      </div>

      {/* Reels */}

      <div className="reels-slider" ref={sliderRef}>
        {reels.map((reel) => (
          <div
            key={reel.id}
            className={`reel-card ${reel.featured ? "featured" : ""}`}
          >
            <video src={reel.video} autoPlay muted loop playsInline />

            <div className="gradient"></div>

            <div className="reels-badge">🎬</div>

            {reel.featured && <div className="center-play">▶️</div>}

            <div className="reel-text">
              <h3>{reel.title}</h3>

              <span>{reel.views}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Dots */}

      <div className="slider-dots">
        <span className="active"></span>

        <span></span>

        <span></span>

        <span></span>
      </div>

      {/* Instagram Card */}
    </section>
  );
}

export default InstagramGallery;
