import React from "react";
import PopularSection from "../Components/MainNews/PopularSection/PopularSection";
import MoreMain from "./more-main/MoreMain";
import { sportsNews } from "../utils/getDate";

const More = () => {
  const data = sportsNews.articles.slice(0, 20);
  return (
    <div className="flex flex-col lg:flex-row gap-5 w-full lg:w-[1080px] m-auto p-5">
      <MoreMain data={data} />
      <PopularSection />
    </div>
  );
};

export default More;
