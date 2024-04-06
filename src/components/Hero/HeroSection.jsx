// HeroSection.js
import React from "react";
import Hero from "./Hero";
import HeroBg from "./HeroBg";

const HeroSection = () => {
  return (
    <div className="flex  gap-10 miniDesktop:gap-0 h-screen  justify-center superMedium:justify-between px-5 md:px-20">
        <Hero />
        <HeroBg />
    </div>
  );
};

export default HeroSection;