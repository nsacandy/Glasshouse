import React, { useState } from 'react';

function WriteReview() {
  const [reviewText, setReviewText] = useState('');
  const [receiptFile, setReceiptFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [finishedReview, setFinishedReview] = useState(null);

  const handleTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setReceiptFile(file);
    setPreviewURL(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Review Text:', reviewText);
    console.log('Receipt File:', receiptFile);

    setReviewText('');
    setReceiptFile(null);
    setPreviewURL(null);
    setFinishedReview({
        text: reviewText,
        imageURL: previewURL
    });
  };

    return (
    <div style={{ padding: "1rem" }}>
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            value={reviewText}
            onChange={handleTextChange}
            placeholder="Write your review here..."
            rows="5"
            style={{ width: "100%", padding: "0.5rem" }}
            required
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Upload a receipt photo:</label><br />
          <input type="file" accept="image/*" onChange={handleFileChange} required />
        </div>

        {previewURL && (
          <div style={{ marginTop: "1rem" }}>
            <p>Preview:</p>
            <img src={previewURL} alt="" style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        )}

        <button type="submit" style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
          Submit Review
        </button>
      </form>

      {finishedReview && (
        <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ccc" }}>
        <h3>Your Submitted Review:</h3>
        <p>{finishedReview.text}</p>
        {finishedReview.imageURL && (
        <img src={finishedReview.imageURL} alt="Submitted Receipt" style={{ maxWidth: "100%" }} />
            )}
        </div>
    )}
    </div>
  );
}

export default WriteReview;