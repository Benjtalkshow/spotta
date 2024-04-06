import React from "react";
import { BreadCrumb, ButtonGroup } from "../index";

const ReviewHeader = ({searchValue}) => {
  return (
    <div>
      <div className="w-full flex justify-between px-5 md:px-20">
        {/* text */}
        <div>
          <h1 className="font-bold text-left md:font-normal md:text-2xl">
            {searchValue}
          </h1>
          <h3 className="font-bold leading-0 text-lg">"0" Reviews</h3>
        </div>
        {/* buttons */}
        <div className="hidden md:flex">
          <ButtonGroup />
        </div>
      </div>


      {/* BreadCrumb */}
      <BreadCrumb />
      <div className="flex md:hidden px-5 md:px-20">
        <ButtonGroup />
      </div>
    </div>
  );
};

export default ReviewHeader;
