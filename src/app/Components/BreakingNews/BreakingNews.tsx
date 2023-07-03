import React, { useEffect, useState } from "react";
import BreakingNewsComponent from "./BreakingNewsComponent/BreakingNewsComponent";

const BreakingNews = async () => {
  const data = await getData();
  const requiredData = data?.results?.filter(
    (items: any, index: any) => index < 4
  );
  return (
    <div className="w-[1080px] m-auto p-[20px]">
      <h2 className="font-extrabold text-[26px] mb-3">Breaking News</h2>
      <div className="flex w-full h-[500px] gap-3">
        <BreakingNewsComponent news={requiredData[0]} />
        <div className="w-full h-full flex flex-col gap-3">
          <BreakingNewsComponent news={requiredData[1]} />
          <div className="h-1/2 flex gap-3">
            <BreakingNewsComponent news={requiredData[2]} />
            <BreakingNewsComponent news={requiredData[3]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;

async function getData() {
  const res = await fetch(
    `${process.env.BASE_URL}/svc/topstories/v2/home.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ`
  );
  return res.json();
}
