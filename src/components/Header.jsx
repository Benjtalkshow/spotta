// Header.js
import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-full py-5 px-5 md:px-20  bg-customBg2 ">
      <header className="flex items-center justify-between">
        {/* logo */}
        <Link to={`/`} className="logo flex gap-2 items-center">
          <h1 className="font-bold text-xl sm:text-3xl">SPOTTA</h1>
          <img
            src={logo}
            alt="logo"
            className="w-min sm:w-[50px] h-min sm:h-[50px]"
          />
        </Link>
        {/* link or profile */}
        <div className="font-bold text-[#5378F6]">
          {isLoggedIn ? <h1>USER</h1> : <Link to="/login">LOGIN</Link>}
        </div>
      </header>
    </div>
  );
};

export default Header;