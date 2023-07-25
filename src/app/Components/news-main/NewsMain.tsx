import { getDate } from "@/app/utils/getDate";
import React from "react";

const NewsMain = ({ data }: any) => {
  return (
    <>
      {/*-------- first component -------------*/}
      <>
        <div
          className={`border-2 border-black h-[500px] flex flex-col justify-end row-span-3 mt-5`}
          style={{
            backgroundImage: `url(${data[0]?.multimedia?.[1]?.url || ""})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="p-2">
          <p className="border-b-[1px] border-black font-bold">
            {data[0]?.title}
          </p>
          <p className="opacity-40">{data[0]?.byline}</p>
          <p className="my-2">{data[0]?.abstract}</p>
          <p className="font-bold opacity-60">
            {getDate(data[0]?.published_date)}
          </p>
        </div>
      </>
      {/*-------- first component end -------------*/}

      {/*-------------- remaining component --------------- */}
      {data
        ?.filter((items: any, index: any) => 0 < index)
        ?.map((news: any, index: any) => (
          <>
            <div
              className={`border-2 border-black h-[400px] flex flex-col justify-end row-span-3 mt-5`}
              style={{
                backgroundImage: `url(${news?.multimedia?.[1]?.url || ""})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              key={index}
            ></div>
            <div className="p-2">
              <p className="border-b-[1px] border-black font-bold">
                {news?.title}
              </p>
              <p className="opacity-40">{news?.byline}</p>
              <p className="my-2">{news?.abstract}</p>
              <p className="font-bold opacity-60">
                {getDate(news?.published_date)}
              </p>
            </div>
          </>
        ))}
      {/*-------------- remaining component end --------------- */}
    </>
  );
};

export default NewsMain;
