import React, { useEffect, useState } from "react";
import { Header, HeroSection, PageLoader } from "../components";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="w-full h-full bg-customBg2 relative">
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
