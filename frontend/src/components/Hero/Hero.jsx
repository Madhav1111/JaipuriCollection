import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const slides = [
  {
    bg: "/images/suits.png",
    link: "/collection/bedsheets",
  },
  {
    bg: "/images/saree.png",
    link: "/collection/bedsheets",
  },
  {
    bg: "/images/bedsheet-banner.jpg",
    link: "/collection/bedsheets",
  },
];

function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const navigate = useNavigate();

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
      <div
        className="hero-bg"
        onClick={() => navigate(currentSlide.link)}
        style={{ cursor: "pointer" }}
      >
        <img
          src={currentSlide.bg}
          alt="Jaipuri Collection"
          className="hero-image"
        />

        <div
          className="slider-ui"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className="dot-hitbox"
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span
                  className={`dot ${
                    index === activeSlide ? "active" : ""
                  }`}
                />
              </button>
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