import React from "react";
import Hero from "./Hero";
import HeroBg from "./HeroBg";

const HeroSection = () => {
  return (
    <div className="w-full justify-between flex gap-10 px-5 md:px-20 items-start h-full">
      <Hero />
      <HeroBg />
    </div>
  );
};

export default HeroSection;
