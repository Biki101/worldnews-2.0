import Image from "next/image";
import React from "react";
import { formatDate, getDate } from "../../../utils/getDate";

const BreakingNewsComponent = ({ news }: any) => {
  return (
    <div
      className={`border-2 border-black w-full h-full flex flex-col justify-end`}
      style={{
        backgroundImage: `url(${news?.urlToImage || "./logo.png"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black text-white p-2 opacity-40">
        <p className="border-b-[1px] border-white ">
          {news?.author?.slice(0, 30)}
        </p>
        <p className="">{news?.title?.slice(0, 50)}</p>
        <p>{formatDate(news?.published_At)}</p>
      </div>
    </div>
  );
};

export default BreakingNewsComponent;
