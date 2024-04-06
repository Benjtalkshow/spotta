import React from "react";
import ReviewCard from "./ReviewCard";
import { reviewData } from "../../data";

const ReviewSection = () => {
  return (
    <div className="w-full md:w-[60%] grid grid-cols-1 gap-3 mb-10">
      {reviewData.map((data, index) => (
        <ReviewCard
          key={index}
          profile={data.profileImage}
          name={data.name}
          rating={data.rating}
          month={data.date}
          description={data.description}
          likes={data.likes}
          dislikes={data.dislikes}
          comments={data.comments}
        />
      ))}
    </div>
  );
};

export default ReviewSection;
