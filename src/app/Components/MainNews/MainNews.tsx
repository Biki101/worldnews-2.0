import React from "react";
import GlobalSection from "./GlobalSection/GlobalSection";
import PopularSection from "./PopularSection/PopularSection";
import Banner from "./Banner/Banner";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import LatestSection from "./LatestSection/LatestSection";

const MainNews = () => {
  return (
    <div className="w-[1080px] m-auto p-[20px]">
      <div className=" flex gap-5">
        <GlobalSection />
        <div className="w-1/4">
          <PopularSection />
        </div>
      </div>
      <div className="flex justify-center m-10">
        <Banner />
      </div>
      <div className="flex gap-5">
        <LatestSection />
        <div className="w-1/4">
          <FeaturedSection />
        </div>
      </div>
    </div>
  );
};

export default MainNews;
