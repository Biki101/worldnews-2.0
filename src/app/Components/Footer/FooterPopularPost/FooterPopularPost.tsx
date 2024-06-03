"use client";
import React, { useEffect, useState } from "react";
import MainNewsComponent from "../../MainNews/MainNewsComponent/MainNewsComponent";
import axios from "axios";
import Image from "next/image";
import { formatDate, getDate } from "../../../../app/utils/getDate";

const FooterPopularPost = () => {
  const [data, setData] = useState<any>(null);

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

  const requiredData = data?.filter((item: any, index: any) => index < 3);

  return (
    <div className="flex flex-col gap-5 grow">
      <span className="text-[18px]">Popular Post</span>
      <ul className="flex flex-col gap-2">
        {requiredData?.map((items: any, index: any) => (
          <li className="flex items-center gap-2" key={index}>
            <Image
              src={items?.urlToImage || "/logo.png"}
              alt="news-image"
              width={100}
              height={100}
            />
            <div>
              <p className=" border-white text-[14px] border-b-[1px] ">
                {items?.author?.slice(0, 30)}
              </p>
              <p className="">{items?.title?.slice(0, 20)}</p>
              <p>{formatDate(items?.published_date)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterPopularPost;
