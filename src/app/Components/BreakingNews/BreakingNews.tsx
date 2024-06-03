"use client";

import React, { useEffect, useState } from "react";
import BreakingNewsComponent from "./BreakingNewsComponent/BreakingNewsComponent";
import axios from "axios";

const BreakingNews = () => {
  // const data: any = getData() || [];
  // console.log(data);
  // const requiredData: any = data?.results?.filter(
  //   (items: any, index: any) => index < 4
  // );

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c07ec7ad52774adfa92c9e9fd31e6af5"
      )
      .then(function (response) {
        // handle success
        setData(response?.data?.articles);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  return (
    <div className="w-full lg:w-[1080px] m-auto p-[20px]">
      <h2 className="font-extrabold text-[26px] mb-3">Breaking News</h2>
      <div className="flex flex-col lg:flex-row  w-full lg:h-[500px] gap-3">
        <div className="h-[500px] w-full">
          <BreakingNewsComponent news={data?.length > 0 ? data[0] : null} />
        </div>
        <div className="w-full h-[600px] lg:h-full flex flex-col gap-3">
          <BreakingNewsComponent news={data?.length > 0 ? data[1] : null} />
          <div className="h-[400px] lg:h-1/2 flex gap-3">
            <BreakingNewsComponent news={data?.length > 0 ? data[2] : null} />
            <BreakingNewsComponent news={data?.length > 0 ? data[3] : null} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
