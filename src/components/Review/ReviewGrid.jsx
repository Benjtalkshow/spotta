import React from "react";
import NoReview from "./NoReview";
import ImageGrid from "./ImageGrid";
import { tailwindEffect } from "../../data/constants";
import ReviewSection from "./ReviewSection";

const ReviewGrid = ({ review = !false }) => {
  return (
    <div className="w-full h-full py-5">
      {review ? (
        <div className={`w-full ${tailwindEffect} flex flex-col-reverse md:flex-row gap-10 justify-between px-5 md:px-20`}>
          {/* grid */}
          <ReviewSection />
          <ImageGrid />
        </div>
      ) : (
        <NoReview />
      )}
    </div>
  );
};

export default ReviewGrid;
