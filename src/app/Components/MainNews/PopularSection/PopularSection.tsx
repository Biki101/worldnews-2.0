"use client";
import React, { useEffect, useState } from "react";
import NewsTitle from "../../NewsTitle/NewsTitle";
import Image from "next/image";
import { getDate } from "../../../../app/utils/getDate";
import axios from "axios";
const PopularSection = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        const data = response?.data;
        if (data?.status == "OK") {
          setData(data?.results?.slice(0, 4));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
                  src={items?.multimedia?.[1]?.url || ""}
                  alt="news-item"
                  width={300}
                  height={350}
                  className="h-[auto] w-[100%] border-[2px] border-black"
                />
                <div className="w-full">
                  <p className=" border-black  text-[14px] border-b-[1px] ">
                    {items?.byline?.slice(0, 30)}
                  </p>
                  <p className="">{items?.title}</p>
                  <p className="text-[12px]">
                    {getDate(items?.published_date)}
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
