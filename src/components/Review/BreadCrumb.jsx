import React, { useState, useRef, useEffect } from "react";
import { breadcrumbData } from "../../data";
import { ChevronRight, ChevronLeft } from "lucide-react";
import styles from "../../assets/css/hideScrollbar.module.css";

const BreadCrumb = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const badgeContainerRef = useRef(null);

  useEffect(() => {
    const container = badgeContainerRef.current;
    const handleScroll = () => {
      setScrollPosition(container.scrollLeft);
    };
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollLeft = () => {
    const container = badgeContainerRef.current;
    container.scrollLeft -= 200;
  };

  const handleScrollRight = () => {
    const container = badgeContainerRef.current;
    container.scrollLeft += 200;
  };

  return (
    <div className="px-5 md:px-20 mt-5 mb-5 flex items-center">
      <div className="hidden md:block">
      <button
        className={`bg-white mr-2 shadow-md rounded-full p-2 cursor-pointer ${
          scrollPosition > 0 ? "inline-flex" : "hidden"
        }`}
        onClick={handleScrollLeft}
      >
        <ChevronLeft strokeWidth={1} />
      </button>
      </div>
      <div
        className={`flex items-center overflow-x-auto scrollbar-hide ${styles["hide-scroll"]} flex-1`}
        ref={badgeContainerRef}
      >
        {breadcrumbData.map((item, index) => (
          <div
            key={index}
            className="badge cursor-pointer border-[1px] border-gray-400 bg-white rounded py-3 px-5 mr-4 flex-shrink-0"
          >
            {item.text}
          </div>
        ))}
      </div>
      <div className="hidden md:block">
      <button
        className={`bg-white ml-2 shadow-md rounded-full p-2 cursor-pointer ${
          scrollPosition <
          badgeContainerRef.current?.scrollWidth -
            badgeContainerRef.current?.clientWidth
            ? "inline-flex"
            : "hidden"
        }`}
        onClick={handleScrollRight}
      >
        <ChevronRight strokeWidth={1} />
      </button>
      </div>
    </div>
  );
};

export default BreadCrumb;