import React, { useState } from "react";
import profileImage from "../../assets/images/profile.svg";
import star from "../../assets/images/star.svg";
import likeIcon from "../../assets/images/like.svg";
import dislikeIcon from "../../assets/images/dislike.svg";
import commentIcon from "../../assets/images/comment.svg";
import ShortButton from "../ShortButton";
import { tailwindEffect } from "../../data/constants";
import { toast } from "react-hot-toast"

const ReviewCard = ({
  id,
  profile,
  name,
  rating,
  month,
  description,
  likes,
  dislikes,
  comments,
}) => {
  const [comment, setComment] = useState(false);
  const [postComment, setPostComment] = useState(false);

  const openComment = () => {
    setComment(true);
  };
  const closeComment = () => {
    setComment(false);
  };

  const handleSubmitComment = () => {
    setComment(false);
    toast.error("Submitting comment not functional")
  };

  const formatName = (name) => {
    const words = name.split(" ");
    if (words.length > 1) {
      return words.map((word) => word.charAt(0).toUpperCase()).join("");
    } else {
      return name.slice(0, 2).toUpperCase();
    }
  };

  return (
    <div
      className="card rounded-none w-full border-b-2 border-b-gray-300 h-fit"
      id={id}
    >
      {/* profile && rating */}
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-3">

          <div className="avatar placeholder h-12 w-12">
            <div className="bg-neutral text-neutral-content rounded-full w-12">
              <span>{formatName(name) || 'Nil'}</span>
            </div>
          </div>
          <h2 className="font-bold">{name || `No user`}</h2>
          <h2 className="text-gray-400">{month || `No month`}</h2>
        </div>

        {/* rating */}
        <div className="flex gap-3 items-center">
          <img src={star} alt="rating" className="w-4 h-4" />
          <h3 className="font-bold">{rating || `No rating`}</h3>
        </div>
      </div>
      {/* text description */}
      <h1 className="font-semibold py-3">{description || `No description`}</h1>
      {/* reactions */}
      <div className="flex gap-8 items-center mb-5">
        {/* like */}
        <div className="flex items-center gap-[2px]">
          <img
            src={likeIcon}
            alt="like"
            className="w-6 h-6 flex cursor-pointer"
          />
          <span className="text-reactionColor">{likes || `No likes`}</span>
        </div>
        {/* dislike */}
        <div className="flex items-center gap-[2px]">
          <img
            src={dislikeIcon}
            alt="dislike"
            className="w-6 h-6 flex cursor-pointer"
          />
          <span className="text-reactionColor">
            {dislikes || `No dislikes`}
          </span>
        </div>
        {/* comment */}
        <div className="flex items-center gap-[2px]">
          <img
            src={commentIcon}
            alt="comment"
            className="w-6 h-6 flex cursor-pointer"
            onClick={comment ? closeComment : openComment}
          />
          <span className="text-reactionColor">
            {comments || `No comments`}
          </span>
        </div>
      </div>
      {/* comment section */}
      {comment && (
        <div
          className={`${tailwindEffect} w-full items-center border-t-2 gap-3 justify-between border-t-gray-300 flex`}
        >
          <input
            type="text"
            placeholder="Add a comment"
            className={`placeholder:text-black outline-none w-full py-3 ${tailwindEffect}`}
          />
          <ShortButton
            onClick={handleSubmitComment}
            label="POST"
            className={`bg-customBlue px-5 py-[3.5px] text-white hover:bg-blue-700 rounded-md`}
          />
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
