"use client";
import React, { useEffect, useState } from "react";
import NewsTitle from "../../NewsTitle/NewsTitle";
import Image from "next/image";
import { formatDate, getDate } from "../../../../app/utils/getDate";
import axios from "axios";
const PopularSection = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=c07ec7ad52774adfa92c9e9fd31e6af5"
      )
      .then(function (response) {
        // handle success
        setData(response?.data?.articles.slice(0, 4));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  return (
    <div className="w-full lg:w-1/4">
      <NewsTitle title="Popular News" />
      <div className="pt-5 flex flex-col justify-center gap-5">
        {data?.length !== 0 &&
          data?.map((items: any, index: any) => {
            return (
              <div
                className="flex flex-col items-center lg:items-start gap-3 w-full"
                key={index}
              >
                <Image
                  src={items?.urlToImage || "/logo.png"}
                  alt="news-item"
                  width={300}
                  height={350}
                  className="h-[auto] w-[100%] border-[2px] border-black"
                />
                <div className="w-full">
                  <p className=" border-black  text-[14px] border-b-[1px] ">
                    {items?.author?.slice(0, 30)}
                  </p>
                  <p className="">{items?.title}</p>
                  <p className="text-[12px]">
                    {formatDate(items?.published_date)}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PopularSection;
