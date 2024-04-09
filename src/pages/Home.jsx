import React, { useEffect, useState } from "react";
import { Header,  PageLoader } from "../components";
import  HeroSection  from "../components/hero/HeroSection";


const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="w-full h-fit md:h-full bg-customBg2 relative">
      {!loading ? (
        <>
          <Header />
          <HeroSection />
        </>
      ) : (
        <>
          <PageLoader />
        </>
      )}
    </div>
  );
};

export default Home;
