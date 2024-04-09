import React, { useEffect, useState } from "react";
import {
  Alert,
  Header,
  PageLoader,
  ReviewGrid,
  ReviewHeader,
} from "../components";
import { useParams } from "react-router-dom";

const Review = () => {
  const { amenity } = useParams();
  const [searchValue, setSearchValue] = useState(amenity);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="w-full bg-customBg2 pb-5">
        <Header
          showInput={true}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <ReviewHeader searchValue={searchValue} />
      </div>
      {isLoading ? <PageLoader /> : <ReviewGrid />}
    </div>
  );
};

export default Review;
