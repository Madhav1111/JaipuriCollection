import "./AiRoomPreview.css";

function AIRoomPreview() {
  console.log("AiRoomPreview rendered");
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

        <div className="preview-card">
          <div className="preview-tag left-tag">Your Room</div>

          <div className="preview-tag right-tag">AI Preview</div>

          {/* BEFORE IMAGE */}
          <img
            src="/images/before.webp"
            className="before-image"
            alt="Your Room"
          />

          <div className="after-wrapper">
            <img
              src="/images/after.webp"
              alt="AI Preview"
              className="after-image"
            />
          </div>

          <div className="preview-divider"></div>

          <div className="preview-handle">❮❯</div>
        </div>
      </div>
    </section>
  );
}

export default AIRoomPreview;
