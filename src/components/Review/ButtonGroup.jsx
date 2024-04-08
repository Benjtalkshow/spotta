import React, { useContext } from "react";
import ShortButton from "../ShortButton"; 
import { Bookmark, Share2 } from "lucide-react";
import { tailwindEffect } from "../../data/constants";
import { FirebaseAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ButtonGroup = () => {
  const { isLoggedIn } = useContext(FirebaseAuthContext)
  const navigate = useNavigate()
  
  const goToReview = () => {
    if(isLoggedIn) {
      navigate('/create-review')
    } else {
      toast.error("Oh, you have to login first")
    }}

  return (
    <div className="justify-start flex miniScreen:justify-normal w-full miniScreen:w-fit flex-col miniScreen:flex-row gap-3 items-center">
    <ShortButton
        label="LEAVE A REVIEW"
        className="border-0 py-3 whitespace-nowrap rounded-md text-white bg-customBlue px-10 hover:bg-blue-700"
        tailwindEffect={tailwindEffect}
        onClick={goToReview}
      />
      <div className="flex gap-3">
        <ShortButton
          icon={Bookmark}
          iconColor={`blue`}
          strokeWidth={1}
          className="border-[2px] border-customBlue p-[0.6rem] rounded-md text-white bg-transparent"
          tailwindEffect={tailwindEffect}
        />
        <ShortButton
          icon={Share2}
          iconColor={`blue`}
          strokeWidth={1}
          className="border-[2px] border-customBlue p-[0.6rem] rounded-md text-white bg-transparent"
          tailwindEffect={tailwindEffect}
        />
      </div>
    </div>
  );
};

export default ButtonGroup;
