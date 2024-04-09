// Header.js
import React, { useContext, useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { SearchInput } from "./index";
import Profile from "./Profile";

const Header = ({ showInput = false, searchValue, setSearchValue }) => {
  const [suggestions, setSuggestions] = useState([
    "Security",
    "Bus Stations",
    "Schools",
    "Resort Parks",
  ]);

  return (
    <div className="w-full py-5 px-5 md:px-20  bg-customBg2 ">
      <header className="flex items-center justify-between">
        <div className="flex gap-20 w-full">
          {/* logo */}
          <Link to={`/`} className="logo flex gap-2 items-center">
            <h1 className="font-bold text-xl sm:text-3xl">SPOTTA</h1>
            <img
              src={logo}
              alt="logo"
              className="w-min sm:w-[50px] h-min sm:h-[50px]"
            />
          </Link>
          {/* input */}
          {showInput && (
            <div className=" hidden md:block w-full">
              <SearchInput
                width={`70%`}
                type="text"
                id={`review`}
                value={searchValue}
                placeholder={`Search your review here`}
                iconColor={`blue`}
                onChange={setSearchValue}
                suggestions={suggestions}
              />
            </div>
          )}
        </div>
        {/* link or profile */}
        <div>
          <Profile />
        </div>
      </header>
      {showInput && (
        <div className="block md:hidden mt-3">
          <SearchInput
            type="text"
            id={`review`}
            value={searchValue}
            placeholder={`Search your review here`}
            iconColor={`blue`}
            onChange={setSearchValue}
            suggestions={suggestions}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
