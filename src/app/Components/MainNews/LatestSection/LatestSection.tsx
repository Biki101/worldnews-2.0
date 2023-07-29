"use client";
import React, { useEffect, useState } from "react";
import NewsTitle from "../../NewsTitle/NewsTitle";
import axios from "axios";
import { getDate } from "../../../../app/utils/getDate";

const LatestSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        const data = response?.data;
        if (data?.status == "OK") {
          setNews(data?.results);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="lg:w-3/4">
      <NewsTitle title="Latest Articles" />
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3">
        {news
          ?.filter((items: any, index: any) => index < 6)
          ?.map((items: any, index: any) => {
            return (
              <div
                className={`border-2 border-black h-[300px] flex flex-col justify-end row-span-3`}
                style={{
                  backgroundImage: `url(${items?.multimedia?.[1]?.url || ""})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                key={index}
              >
                <div className="bg-black text-white p-2 opacity-40">
                  <p className="border-b-[1px] border-white ">
                    {items?.byline?.slice(0, 30)}
                  </p>
                  <p className="">{items?.title?.slice(0, 80)}</p>
                  <p>{getDate(items?.published_date)}</p>
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default LatestSection;

async function getData() {
  const res = await fetch(
    `${process.env.BASE_URL}/svc/topstories/v2/world.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ`
  );
  return res.json();
}
