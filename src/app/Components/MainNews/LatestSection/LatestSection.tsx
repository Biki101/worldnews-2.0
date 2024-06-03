"use client";
import React, { useEffect, useState } from "react";
import NewsTitle from "../../NewsTitle/NewsTitle";
import axios from "axios";
import { formatDate, getDate } from "../../../../app/utils/getDate";

const LatestSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=c07ec7ad52774adfa92c9e9fd31e6af5"
      )
      .then(function (response) {
        // handle success
        setNews(response?.data?.articles);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

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
                  backgroundImage: `url(${items?.urlToImage || "/logo.png"})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                key={index}
              >
                <div className="bg-black text-white p-2 opacity-40">
                  <p className="border-b-[1px] border-white ">
                    {items?.author?.slice(0, 30)}
                  </p>
                  <p className="">{items?.title?.slice(0, 80)}</p>
                  <p>{formatDate(items?.published_date)}</p>
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default LatestSection;
