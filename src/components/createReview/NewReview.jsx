import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { breadcrumbData } from "../../data";
import ShortButton from "../ShortButton";

const NewReview = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-customBg rounded-md p-5 relative w-full md:w-1/2">
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
        className="container flex px-2 justify-between bg-customInputBg items-center py-3 rounded-sm"
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
      {isOpen && (
        <div className="absolute grid grid-cols-1 md:grid-cols-5 gap-3  border p-2  bg-customInputBg w-[94.3%] left-5">
          {breadcrumbData.map((data, index) => (
            <div
              key={index}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <input type="checkbox" id={data.text + index} />
              <p className="font-semibold">{data.text}</p>
            </div>
          ))}
        </div>
      )}

      {/* textarea */}
      <textarea
        placeholder="Write your review"
        className="textarea mt-5 border-[1px] border-gray-300 focus:outline-customBlue focus:ring-0 focus:outline-2 textarea-bordered textarea-lg w-full h-40"
      ></textarea>

    {/* checkbox for anonymous */}
    <div className="flex items-center my-2 gap-2">
      <input type="checkbox" />
      <p>Post as Anonymous</p>
    </div>
    {/* buttons */}
    <div className="w-full flex gap-8 items-center justify-between mt-5">
      <ShortButton className={`bg-gray-300 border-[1px] border-gray-300 cursor-pointer text-white rounded-md py-3 px-10 md:w-1/2 `} label="SUBMIT"/>
      <ShortButton className={`bg-white border-[1px] border-customBlue text-customBlue rounded-md py-3 px-10 w-1/2 `} label="SUBMIT"/>
    </div>
    </div>
  );
};

export default NewReview;
