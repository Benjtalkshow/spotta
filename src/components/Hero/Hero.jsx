import React from "react";
import { Search } from "lucide-react";
import { tailwindEffect } from "../../data/constants";

const Hero = () => {
  return (
    <section className="flex justify-center mt-10 superMedium:mt-0 items-center w-full superMedium:w-fit text-center superMedium:text-left">
      <div className="w-full max-w-md px-5 md:px-0">
        <h1 className="font-bold text-3xl miniDesktop:text-5xl leading-tight">
          Find a place you <br /> will love to live!
        </h1>
        <h3 className="text-base md:text-lg my-5 md:my-8">
          See through the lenses of people who have <br className="hidden md:block" />
          lived or visited the neighbourhood you might <br className="hidden md:block" />
          have in mind.
        </h3>

        {/* input */}
        <div
          className={`w-full ${tailwindEffect} border-2 flex items-center bg-customGray rounded-lg px-2 focus-within:border-customBlue`}
        >
          <Search className="flex-shrink-0" />
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