import React, { useContext } from "react";
import noReview from "../../assets/images/noReview.svg";
import ShortButton from "../ShortButton";
import { tailwindEffect } from "../../data/constants";
import { FirebaseAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const NoReview = () => {
  const { isLoggedIn } = useContext(FirebaseAuthContext)
  const navigate = useNavigate()

 const goToReview = () => {
  if(isLoggedIn) {
    navigate('/create-review')
  } else {
    toast.error("Oh, you have to login first")
  }
 } 
  return (
    <div className="w-full flex justify-center items-center my-20  bg-transparent">
      <div className="text-center">
        <img src={noReview} alt="no review logo" width={200} height={200} />
        <h3 className="text-center font-semibold py-8">
          Oops! No reviews yet.
        </h3>
        <ShortButton className="text-white hover:bg-blue-700 bg-customBlue px-5 py-3 rounded-md"  label="LEAVE A REVIEW" tailwindEffect={tailwindEffect} onClick={goToReview} />
      </div>
    </div>
  );
};

export default NoReview;
