"use client";
import { formatDate, getDate } from "@/app/utils/getDate";
import React, { useEffect, useRef, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const NewsMain = ({ data }: any) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);

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

  console.log(startIndex, endIndex);

  return (
    <>
      {/*-------- first component -------------*/}
      {data
        .filter(
          (item: any, index: any) => startIndex <= index && index < endIndex
        )
        .map((items: any) => {
          return (
            <>
              <div
                className={`border-2 border-black h-[500px] flex flex-col justify-end row-span-3 mt-5`}
                style={{
                  backgroundImage: `url(${items?.urlToImage || "/logo.png"})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="p-2">
                <p className="border-b-[1px] border-black font-bold">
                  {items?.title}
                </p>
                <p className="opacity-40">{items?.author}</p>
                <p className="my-2">{items?.description}</p>
                <p className="font-bold opacity-60">
                  {formatDate(items?.published_date)}
                </p>
              </div>
            </>
          );
        })}
      {/*-------- first component end -------------*/}

      {/*-------------- remaining component --------------- */}
      {/* {requiredNews?.map((news: any, index: any) => {
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
      })} */}
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
