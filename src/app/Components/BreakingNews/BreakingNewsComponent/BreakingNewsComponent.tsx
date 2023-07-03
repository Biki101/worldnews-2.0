import Image from "next/image";
import React from "react";
import { getDate } from "../../../utils/getDate";

const BreakingNewsComponent = ({ news }: any) => {
  return (
    <div
      className={`border-2 border-black w-full h-full flex flex-col justify-end`}
      style={{
        backgroundImage: `url(${news?.multimedia?.[1]?.url || ""})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black text-white p-2 opacity-40">
        <p className="border-b-[1px] border-white ">
          {news?.byline.slice(0, 30)}
        </p>
        <p className="">{news?.title?.slice(0, 40)}</p>
        <p>{getDate(news?.published_date)}</p>
      </div>
    </div>
  );
};

export default BreakingNewsComponent;
