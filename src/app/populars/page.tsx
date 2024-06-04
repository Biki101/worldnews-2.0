import React, { useEffect, useState } from "react";
import PopularMain from "./popular-main/PopularMain";
import { topHeadlines } from "../utils/getDate";

const Populars = () => {
  const data = topHeadlines.articles.slice(0, 20);

  return (
    <div className=" flex-col lg:flex-row w-full lg:w-[1080px] m-auto p-5 gap-5">
      <PopularMain data={data} />
      {/* <PopularSection /> */}
    </div>
  );
};

export default Populars;
