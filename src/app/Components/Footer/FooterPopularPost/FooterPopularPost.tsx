"use client";
import React, { useEffect, useState } from "react";
import MainNewsComponent from "../../MainNews/MainNewsComponent/MainNewsComponent";
import axios from "axios";
import Image from "next/image";
import { getDate } from "../../../../app/utils/getDate";

const FooterPopularPost = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        const temp = response?.data;
        if (temp?.status === "OK") {
          setData(temp?.results);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const requiredData = data?.filter((item: any, index: any) => index < 3);

  return (
    <div className="flex flex-col gap-5 grow">
      <span className="text-[18px]">Popular Post</span>
      <ul className="flex flex-col gap-2">
        {requiredData?.map((items: any, index: any) => (
          <li className="flex items-center gap-2" key={index}>
            <Image
              src={items?.multimedia?.[2]?.url}
              alt="news-image"
              width={100}
              height={100}
            />
            <div>
              <p className=" border-white text-[14px] border-b-[1px] ">
                {items?.byline?.slice(0, 30)}
              </p>
              <p className="">{items?.title?.slice(0, 20)}</p>
              <p>{getDate(items?.published_date)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterPopularPost;
