// HeroSection.js
import React from "react";
import Hero from "./Hero";
import HeroBg from "./HeroBg";

const HeroSection = () => {
  return (
    <div className="flex flex-col superMedium:flex-row gap-10 superMedium:gap-20 miniDesktop:gap-0 h-screen justify-between px-5 md:px-20">
        <Hero />
        <HeroBg />
    </div>
  );
};

export default HeroSection;