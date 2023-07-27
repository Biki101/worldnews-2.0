"use client";
import { getDate } from "@/app/utils/getDate";
import React, { useEffect, useRef, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const NewsMain = ({ data }: any) => {
  const news = useRef(data);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);
  const [requiredNews, setRequiredNews] = useState(
    data.slice(startIndex, endIndex)
  );

  useEffect(() => {
    setRequiredNews(data.slice(startIndex, endIndex));
  }, [startIndex, endIndex]);

  const handleNext = () => {
    if (startIndex < 16) {
      setStartIndex(startIndex + 4);
      setEndIndex(endIndex + 4);
    } else {
      setStartIndex(0);
      setEndIndex(4);
    }
  };
  const handlePrev = () => {
    if (startIndex >= 4) {
      setStartIndex(startIndex - 4);
      setEndIndex(endIndex - 4);
    } else {
      setStartIndex(16);
      setEndIndex(20);
    }
  };

  return (
    <>
      {/*-------- first component -------------*/}
      <>
        <div
          className={`border-2 border-black h-[500px] flex flex-col justify-end row-span-3 mt-5`}
          style={{
            backgroundImage: `url(${
              data[endIndex + 1]?.multimedia?.[1]?.url || ""
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="p-2">
          <p className="border-b-[1px] border-black font-bold">
            {data[endIndex + 1]?.title}
          </p>
          <p className="opacity-40">{data[endIndex + 1]?.byline}</p>
          <p className="my-2">{data[endIndex + 1]?.abstract}</p>
          <p className="font-bold opacity-60">
            {getDate(data[endIndex + 1]?.published_date)}
          </p>
        </div>
      </>
      {/*-------- first component end -------------*/}

      {/*-------------- remaining component --------------- */}
      {requiredNews?.map((news: any, index: any) => {
        console.log(news);
        return (
          <div key={index}>
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
          </div>
        );
      })}
      {/*-------------- remaining component end --------------- */}

      {/* -------- Pagination --------- */}
      <div className="flex justify-end gap-3 my-10">
        <span
          className="bg-black text-white p-3 px-6 flex items-center gap-2 cursor-pointer"
          onClick={handlePrev}
        >
          <BsFillArrowLeftCircleFill /> PREV
        </span>
        <span
          className="bg-black text-white p-3 px-6 flex items-center gap-2 cursor-pointer"
          onClick={handleNext}
        >
          NEXT <BsFillArrowRightCircleFill />
        </span>
      </div>
      {/* -------- Pagination End --------- */}
    </>
  );
};

export default NewsMain;
