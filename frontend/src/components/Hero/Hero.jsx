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
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
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
                type="button"
                className="dot-hitbox"
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeSlide ? "true" : undefined}
              >
                <span
                  className={`dot ${
                    index === activeSlide ? "active" : ""
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroBanner;