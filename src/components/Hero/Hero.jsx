import React, { useContext, useState } from "react";
import { tailwindEffect } from "../../data/constants";
import { SearchInput } from "../index";
import { toast } from "react-hot-toast";
import  { useNavigate } from "react-router-dom";
import { FirebaseAuthContext } from "../../context/AuthContext";


const Hero = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState(['Airport', 'Security', 'Night Life', 'Resort Park']);
  const { isLoggedIn } = useContext(FirebaseAuthContext);
  const navigate = useNavigate()

const handleNavigate = () => {
if(isLoggedIn && value.trim()) {
navigate(`/review/${value}`)
toast.error("Search not yet implemented")
} else {
  toast.error("search is empty or Not authenticated")
}
}

  return (
    <section className="flex justify-center mt-0 items-center w-full superMedium:w-fit">
      <div className="w-full max-w-md px-5 md:px-0">
        <h1 className="font-bold text-3xl miniDesktop:text-5xl leading-tight">
          Find a place you <br /> will love to live!
        </h1>
        <h3 className="text-base md:text-lg my-5 md:my-8">
          See through the lenses of people who have{" "}
          <br className="hidden md:block" />
          lived or visited the neighbourhood you might{" "}
          <br className="hidden md:block" />
          have in mind.
        </h3>

        {/* input */}
        <SearchInput
          type="text"
          id="search"
          placeholder="Type here"
          value={value}
          onChange={setValue}
          className="w-full border-2 flex items-center rounded-lg px-2 focus-within:border-customBlue"
          suggestions={suggestions}
          tailwindEffect={tailwindEffect}
        />

        {/* button */}
        <button
          className={`${tailwindEffect} border-0 btn mt-10 text-white bg-customBlue px-10 hover:bg-blue-700`}
          onClick={handleNavigate}
        >
          SEARCH
        </button>
      </div>
    </section>
  );
};

export default Hero;
