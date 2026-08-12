import { useState } from "react";
import "./CustomerReviews.css";

function CustomerReviews() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const reviews = [
    {
      id: 1,
      name: "Priya S.",
      rating: 5,
      comment:
        "Absolutely beautiful bedsheet. The print looks even better in person!",
      date: "2 days ago",
      image: "/images/review1.jpg",
    },
    {
      id: 2,
      name: "Ananya M.",
      rating: 5,
      comment:
        "Very soft fabric and the colours are exactly as shown.",
      date: "1 week ago",
      image: "/images/review2.jpg",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      rating: selectedRating,
      review: reviewText,
    });

    setSelectedRating(0);
    setReviewText("");
  };

  return (
    <section className="customer-reviews">

      {/* ================================
          HEADING
      ================================= */}

      <div className="reviews-heading">
        <p>REAL CUSTOMER EXPERIENCES</p>

        <h2>Customer Reviews</h2>
      </div>

      {/* ================================
          RATING SUMMARY
      ================================= */}

      <div className="review-summary">

        <div className="overall-rating">
          <strong>4.9</strong>

          <div>
            <div className="summary-stars">
              ★★★★★
            </div>

            <span>186 Reviews</span>
          </div>
        </div>

        <button
          className="write-review-btn"
          onClick={() =>
            document
              .getElementById("review-form")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Write a Review
        </button>

      </div>

      {/* ================================
          WRITE REVIEW
      ================================= */}

      <form
        id="review-form"
        className="review-form"
        onSubmit={handleSubmit}
      >

        <h3>Share Your Experience</h3>

        {/* STAR RATING */}

        <div className="rating-input">

          <span>Your Rating</span>

          <div className="rating-stars">

            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                className={
                  star <= selectedRating
                    ? "selected"
                    : ""
                }
                onClick={() => setSelectedRating(star)}
              >
                ★
              </button>
            ))}

          </div>

        </div>

        {/* COMMENT */}

        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Tell us about your experience..."
          rows="4"
        />

        {/* PHOTO */}

        <label className="photo-upload">

          <span>＋</span>

          <div>
            <strong>Add Photos</strong>
            <small>Show others how it looks in your home</small>
          </div>

          <input
            type="file"
            accept="image/*"
            multiple
          />

        </label>

        <button
          type="submit"
          className="submit-review-btn"
          disabled={!selectedRating || !reviewText.trim()}
        >
          Submit Review
        </button>

      </form>

      {/* ================================
          REVIEWS
      ================================= */}

      <div className="reviews-list">

        {reviews.map((review) => (
          <article
            className="review-card"
            key={review.id}
          >

            <div className="review-top">

              <div>
                <h4>{review.name}</h4>

                <div className="customer-stars">
                  {"★".repeat(review.rating)}
                </div>
              </div>

              <span>{review.date}</span>

            </div>

            <p className="review-comment">
              {review.comment}
            </p>

            {review.image && (
              <button
                className="review-image-btn"
                onClick={() =>
                  setSelectedImage(review.image)
                }
              >
                <img
                  src={review.image}
                  alt={`${review.name}'s review`}
                />
              </button>
            )}

          </article>
        ))}

      </div>

      {/* ================================
          IMAGE LIGHTBOX
      ================================= */}

      {selectedImage && (
        <div
          className="review-lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Customer review"
            onClick={(e) => e.stopPropagation()}
          />

        </div>
      )}

    </section>
  );
}

export default CustomerReviews;