import React, { useState } from "react";

// Component to handle showing more or less text
const ReviewText = ({ review, wordLimit = 40 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split the review text into words
  const words = review.split(" ");
  const isLongReview = words.length > wordLimit;

  // Toggle function to show more or less
  const toggleText = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="mt-4">
      <p>
        {isExpanded
          ? review
          : words.slice(0, wordLimit).join(" ") + (isLongReview ? "..." : "")}
      </p>
      {isLongReview && (
        <button
          onClick={toggleText}
          className="text-blue-500 hover:underline mt-2"
        >
          {isExpanded ? "Show Less" : "See More"}
        </button>
      )}
    </div>
  );
};

export default ReviewText;
