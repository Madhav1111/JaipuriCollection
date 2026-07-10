import { useState, useRef } from "react";
import "./AiRoomPreview.css";

function AIRoomPreview() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const previewRef = useRef(null);

  const handleMove = (clientX) => {
    if (!previewRef.current) return;

    const rect = previewRef.current.getBoundingClientRect();

    let position = ((clientX - rect.left) / rect.width) * 100;

    position = Math.max(0, Math.min(100, position));

    setSliderPosition(position);
  };

  const handleMouseDown = () => {
    const move = (e) => handleMove(e.clientX);

    const stop = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", stop);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stop);
  };

  const handleTouchStart = () => {
    const move = (e) => {
      handleMove(e.touches[0].clientX);
    };

    const stop = () => {
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", stop);
    };

    window.addEventListener("touchmove", move);
    window.removeEventListener("touchend", stop);
  };

  return (
    <section className="ai-room-section">
      {/* Heading */}
      <div className="ai-heading-wrap">
        <div className="ai-heading">
          <div className="ai-heading-top">✦ AI ROOM ✦</div>
          <div className="ai-heading-bottom">PREVIEW</div>
        </div>
      </div>

      {/* Main Card */}
      <div className="ai-room-card">
        {/* LEFT */}
        <div className="ai-left">
          <div className="ai-badge">NEW & EXCLUSIVE</div>

          <h2 className="ai-title">AI Room Preview ✨</h2>

          <p className="ai-subtitle">
            See how our premium Jaipuri collections look inside your own bedroom
            before placing an order.
          </p>

          {/* Steps */}
          <div className="ai-steps">
            <div className="ai-step">
              <div className="ai-icon">📤</div>
              <p>Upload</p>
              <span>Your Room</span>
            </div>

            <div className="ai-arrow">→</div>

            <div className="ai-step">
              <div className="ai-icon">✨</div>
              <p>AI Styles</p>
              <span>Your Room</span>
            </div>

            <div className="ai-arrow">→</div>

            <div className="ai-step">
              <div className="ai-icon">👁</div>
              <p>Preview</p>
              <span>Result</span>
            </div>
          </div>

          <button className="ai-btn">TRY IN MY ROOM ✨</button>

          <small className="ai-note">It's quick, easy & magical ✨</small>
        </div>

        {/* RIGHT */}

        <div className="preview-card" ref={previewRef}>
          <div className="preview-tag left-tag">Your Room</div>

          <div className="preview-tag right-tag">AI Preview</div>

          {/* BEFORE */}

          <img
            src="/images/before.webp"
            className="before-image"
            alt="Your Room"
          />

          {/* AFTER */}

          <div
            className="after-wrapper"
            style={{
              width: `${100 - sliderPosition}%`,
              left: `${sliderPosition}%`,
            }}
          >
            <img
              src="/images/after.webp"
              className="after-image"
              alt="AI Preview"
            />
          </div>

          {/* DIVIDER */}

          <div
            className="preview-divider"
            style={{ left: `${sliderPosition}%` }}
          ></div>

          {/* HANDLE */}

          <div
            className="preview-handle"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            ❮❯
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIRoomPreview;
