import React from "react";
import grid1 from "../../assets/images/grid1.svg";
import grid2 from "../../assets/images/grid2.svg";
import grid3 from "../../assets/images/grid3.svg";
import grid4 from "../../assets/images/grid4.svg";
import styles from "../../assets/css/hideScrollbar.module.css";

const ImageGrid = ({ image = false }) => {
  return (
    <div className={`w-full h-fit md:w-[40%] ${image ? 'block' : 'hidden md:block'}`}>
      {image ? (
        <div
          className={`w-full grid gap-3 grid-row-12 grid-cols-2 overflow-x-scroll md:overflow-x-hidden ${styles["hide-scroll"]}`}
        >
          <div className="">
            <img
              src={grid1}
              alt="image1"
              className="w-80 rounded-md object-cover object-center"
            />
          </div>
          <div className="">
            <img
              src={grid2}
              alt="image2"
              className="w-80 rounded-md object-cover object-center"
            />
          </div>
          <div className="">
            <img
              src={grid3}
              alt="image3"
              className="w-80 rounded-md object-cover object-center"
            />
          </div>
          <div className="">
            <img
              src={grid1}
              alt="image4"
              className="w-80 rounded-md object-cover object-center"
            />
          </div>
        </div>
      ) : (
        <div className="font-bold text-md grid place-content-center text-center w-full p-40 border border-gray-200 rounded-md">
          <h1 className="whitespace-nowrap">No image uploaded</h1>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
