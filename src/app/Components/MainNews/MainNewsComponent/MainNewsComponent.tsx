import Image from "next/image";
import { getDate } from "../../../../app/utils/getDate";
import React from "react";

const MainNewsComponent = ({ news }: any) => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-3 mt-3">
      {/* first child */}
      <div
        className={`border-2 border-black h-full flex flex-col justify-end row-span-3`}
        style={{
          backgroundImage: `url(${news[0]?.multimedia?.[1]?.url || ""})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-black text-white p-2 opacity-40">
          <p className="border-b-[1px] border-white ">
            {news[0]?.byline?.slice(0, 30)}
          </p>
          <p className="">{news[0]?.title?.slice(0, 50)}</p>
          <p>{getDate(news[0]?.published_date)}</p>
        </div>
      </div>
      {/* first child End */}
      {news
        ?.filter((items: any, index: number) => 0 < index && index < 4)
        ?.map((items: any, index: any) => {
          return (
            <div className="flex gap-3" key={index}>
              <Image
                src={items?.multimedia?.[1]?.url || ""}
                alt="news-item"
                width={300}
                height={350}
                className="h-[100px] w-[100px] border-[2px] border-black"
              />
              <div>
                <p className=" border-black  text-[14px] border-b-[1px] ">
                  {items?.byline?.slice(0, 30)}
                </p>
                <p className="">{items?.title?.slice(0, 60) + "..."}</p>
                <p>{getDate(items?.published_date)}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MainNewsComponent;
