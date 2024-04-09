import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full bg-customBg h-screen flex justify-center flex-col items-center gap-3">
      <h1 className="text-md md:text-3xl text-black font-bold text-center">
        Oops <br/> 404 NOT FOUND
      </h1>
      <Link className="text-white bg-customBlue px-4 w-fit btn" to="/">Go Back Home</Link>
    </div>
  );
};

export default Error;
