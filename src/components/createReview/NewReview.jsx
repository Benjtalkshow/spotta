import React, { useContext, useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { breadcrumbData } from "../../data";
import ShortButton from "../ShortButton";
import { toast } from "react-hot-toast";
import { FirebaseAuthContext } from "../../context/AuthContext";

const NewReview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(1);
  const [amenity, setAmenity] = useState([]);
  const [postAsAnonymous, setPostAsAnonymous] = useState(false);
  const { addReview, user } = useContext(FirebaseAuthContext);


  const togglePanel = () => {
    setIsOpen(!isOpen);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if description is empty
    if (!description.trim()) {
      toast.error("Cannot submit empty review");
      return;
    }

    // Check if at least one amenity is selected
    if (amenity.length === 0) {
      toast.error("You must select at least 1 amenity");
      return;
    }

    const name = postAsAnonymous ? "Anonymous" : user ? user.name : "";
    addReview(rating, amenity, description, name);
    setRating(1);
    setAmenity([]);
    setDescription("");
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setRating(1);
    setAmenity([]);
    setDescription("");
  };

  const handleCheckboxChange = (e, text) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setAmenity([...amenity, text]);
    } else {
      setAmenity(amenity.filter((item) => item !== text));
    }
  };

  return (
    <form
      className="bg-customBg rounded-md p-5 relative w-full md:w-1/2"
      onSubmit={handleSubmit}
    >
      <div>
        <h1 className="font-semibold text-lg text-center">Review Location</h1>
      </div>
      <div>
        <h1 className="text-lg font-semibold py-3">
          Bonny and Clyde Street, Ajao Estate, Lagos
        </h1>
      </div>

      {/* Select */}
      <div
        className="w-full flex px-2 justify-between bg-customInputBg items-center py-3 rounded-sm"
        onClick={togglePanel}
      >
        <p>Select Amenities</p>
        {isOpen ? (
          <ChevronUp
            size={20}
            color="gray"
            strokeWidth={2}
            onClick={togglePanel}
          />
        ) : (
          <ChevronDown
            size={20}
            color="gray"
            strokeWidth={2}
            onClick={togglePanel}
          />
        )}
      </div>
      {/* dropdown */}
      {isOpen && (
        <div className="absolute w-full left-0 px-5 z-10">
          <div
            className={`overflow-y-scroll h-[250px] md:h-fit md:overflow-y-hidden grid grid-cols-1 md:grid-cols-2 min-[1230px]:grid-cols-3 min-[1400px]:grid-cols-5 gap-3 border p-2 bg-customInputBg `}
          >
            {breadcrumbData.map((data, index) => (
              <div key={index} className="space-x-2">
                <input
                  type="checkbox"
                  value={data.text}
                  checked={amenity.includes(data.text)}
                  onChange={(e) => handleCheckboxChange(e, data.text)} 
                />
                <label>{data.text}</label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Rate location */}
      <div className="space-y-3 my-2">
        <h1 className="font-semibold">Rate Location</h1>
        <div className="flex rating rating-md">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
              key={index}
              value={index + 1}
              checked={index < rating}
              onChange={(e) => setRating(e.target.value)}
            />
          ))}
        </div>
      </div>

      {/* textarea */}
      <label htmlFor="review" className="label">
        Write Review
      </label>
      <textarea
        placeholder="Write your review"
        className="textarea resize-none  focus:border-0 border border-gray-300 focus:outline-customBlue focus:ring-0 focus:outline-2 textarea-bordered textarea-lg w-full h-40"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      {/* checkbox for anonymous */}
      <div
        className="flex items-center my-2 gap-2"
        onClick={() => setPostAsAnonymous(!postAsAnonymous)}
      >
        <input type="checkbox" checked={postAsAnonymous} />
        <p>Post as Anonymous</p>
      </div>
      {/* buttons */}
      <div className="w-full flex flex-col min-[400px]:flex-row gap-3 min[400px]:gap-8 items-center justify-between mt-5">
        <ShortButton
          className={`${
            description.trim().length <= 0
              ? "bg-gray-300"
              : "bg-customBlue hover:bg-blue-700"
          }  border-[1px] border-gray-300 cursor-pointer text-white rounded-md py-3 px-10 w-full md:w-1/2 `}
          label="SUBMIT"
          type={`submit`}
          disabled={description.trim() == "" ? true : false}
        />
        <ShortButton
          className={`bg-white border-[1px] border-customBlue text-customBlue rounded-md py-3 px-10 w-full md:w-1/2 `}
          label="CANCEL"
          onClick={handleCancel}
        />
      </div>
    </form>
  );
};

export default NewReview;
