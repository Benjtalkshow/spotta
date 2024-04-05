import React from "react";
import { Search } from "lucide-react";
import { tailwindEffect } from "../../data/constants";

const Hero = () => {
  return (
    <section className="flex justify-center items-center mt-60">
    <div className="">
      <h1 className="font-bold text-5xl leading-snug">
        Find a place you <br /> will love to live!
      </h1>
      <h3 className="text-lg my-5">
        See through the lenses of people who have <br /> lived or visited the
        neighbourhood you might <br /> have in mind.
      </h3>
      {/* input */}
      <div
        className={`w-full ${tailwindEffect} border-2 flex items-center bg-customGray rounded-lg px-2 focus-within:border-customBlue`}
      >
        <Search />
        <input
          type="text"
          placeholder="Type here"
          className="input border-none bg-inherit rounded-none focus:outline-none w-full max-w-xs"
        />
      </div>
      {/* button */}
      <button
        className={`${tailwindEffect} border-0 btn mt-10 text-white bg-customBlue px-10 hover:bg-blue-400`}
      >
        SEARCH
      </button>
    </div>
    </section>
  );
};

export default Hero;
