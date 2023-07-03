import React from "react";
import GlobalSection from "./GlobalSection/GlobalSection";
import PopularSection from "./PopularSection/PopularSection";

const MainNews = () => {
  return (
    <div className="w-[1080px] m-auto p-[20px] flex gap-5">
      <GlobalSection />
      <PopularSection />
    </div>
  );
};

export default MainNews;
