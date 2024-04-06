import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { breadcrumbData } from "../../data";
import ShortButton from "../ShortButton";
import rate from "../../assets/images/rate.svg";

const NewReview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

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
        <div className="absolute w-full left-0 px-5">
          <div
            className={`overflow-y-scroll h-[250px] md:h-fit md:overflow-y-hidden grid grid-cols-1 md:grid-cols-2 min-[1230px]:grid-cols-3 min-[1400px]:grid-cols-5 gap-3 border p-2 bg-customInputBg `}
          >
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
        </div>
      )}

      {/* Rate location */}
      <div className="space-y-3 my-2">
        <h1 className="font-semibold">Rate Location</h1>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <img
              src={rate}
              alt="rating"
              className="cursor-pointer"
              onClick={() => alert(index + 1)}
              key={index}
              id={item + index + 1}
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
        id="review"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>

      {/* checkbox for anonymous */}
      <div className="flex items-center my-2 gap-2">
        <input type="checkbox" />
        <p>Post as Anonymous</p>
      </div>
      {/* buttons */}
      <div className="w-full flex flex-col min-[400px]:flex-row gap-3 min[400px]:gap-8 items-center justify-between mt-5">
        <ShortButton
          className={`${
            value.length <= 0
              ? "bg-gray-300"
              : "bg-customBlue hover:bg-blue-700"
          }  border-[1px] border-gray-300 cursor-pointer text-white rounded-md py-3 px-10 w-full md:w-1/2 `}
          disabled={value <= 0 ? false : true}
          label="SUBMIT"
        />
        <ShortButton
          className={`bg-white border-[1px] border-customBlue text-customBlue rounded-md py-3 px-10 w-full md:w-1/2 `}
          label="CANCEL"
        />
      </div>
    </div>
  );
};

export default NewReview;
