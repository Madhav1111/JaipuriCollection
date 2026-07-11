import { useEffect, useState } from "react";
import "./Hero.css";

const slides = [
  { bg: "/images/suits.png" },
  { bg: "/images/saree.png" },
  { bg: "/images/bedsheet-banner.jpg" },
];

function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentSlide = slides[activeSlide];

  return (
    <section className="hero-banner">
      <div className="hero-bg">
        <img
          src={currentSlide.bg}
          alt="Jaipuri Collection"
          className="hero-image"
        />

        <div className="slider-ui">
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeSlide ? "active" : ""}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>

          <button
            className="slider-toggle"
            onClick={() => setIsPlaying((prev) => !prev)}
          >
            {isPlaying ? "⏸" : "▶️"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
