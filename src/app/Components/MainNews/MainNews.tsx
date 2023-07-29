import React from "react";
import GlobalSection from "./GlobalSection/GlobalSection";
import PopularSection from "./PopularSection/PopularSection";
import Banner from "./Banner/Banner";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import LatestSection from "./LatestSection/LatestSection";

const MainNews = () => {
  return (
    <div className="w-full lg:w-[1080px] m-auto p-[20px]">
      <div className="flex flex-col lg:flex-row gap-5">
        <GlobalSection />
        <PopularSection />
      </div>
      <div className="flex justify-center m-10">
        <Banner />
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <LatestSection />
        <FeaturedSection />
      </div>
    </div>
  );
};

export default MainNews;
