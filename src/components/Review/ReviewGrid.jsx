import React, { useContext, useEffect, useState } from "react";
import NoReview from "./NoReview";
import ImageGrid from "./ImageGrid";
import { tailwindEffect } from "../../data/constants";
import ReviewSection from "./ReviewSection";
import { FirebaseAuthContext } from "../../context/AuthContext";
import PageLoader from "../Loaders/PageLoader";

const ReviewGrid = ({ searchParam }) => {
  const { fetchAllReviews } = useContext(FirebaseAuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
    try {
      setLoading(true);
      const reviewsData = await fetchAllReviews();
      setReviews(reviewsData);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-2xl font-bold text-customBlue">Fetching reviews...</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-full py-5">
      {searchParam}
      {reviews.length > 0 ? (
        <div
          className={`w-full ${tailwindEffect} flex flex-col-reverse md:flex-row gap-10 justify-between px-5 md:px-20`}
        >
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
