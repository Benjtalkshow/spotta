import React from "react";

const PageLoader = () => {
  return (
    <div className="overshadow w-full h-screen bg-black bg-opacity-80 flex justify-center items-center absolute">
      <span className="loading loading-infinity w-[6rem]  bg-slate-200"></span>
    </div>
  );
};

export default PageLoader;
