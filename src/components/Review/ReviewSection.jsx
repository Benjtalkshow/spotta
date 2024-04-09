import React, { useContext, useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { FirebaseAuthContext } from "../../context/AuthContext";
import { formatDistanceToNow } from "date-fns";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const { fetchAllReviews } = useContext(FirebaseAuthContext);

  const createdDate = (createdAt) => {
    const createDate = createdAt.toDate();
    const timeAgo = formatDistanceToNow(createDate, { addSuffix: true });
    return timeAgo.replace("about ", "");
  };
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const reviewsData = await fetchAllReviews();
      setReviews(reviewsData);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  return (
    <div className="w-full md:w-[60%] grid grid-cols-1 gap-3 mb-10">
      {reviews.map((data) => (
        <ReviewCard
          key={data.id}
          id={data.id +" "+ data.userId}
          profile={null}
          amenity={data.amenity}
          name={data.name}
          rating={data.rating}
          month={createdDate(data.createdAt)}
          description={data.description}
          likes={`200`}
          dislikes={`14`}
          comments={`12`}
        />
      ))}
    </div>
  );
};

export default ReviewSection;
