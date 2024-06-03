"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PopularSection from "../Components/MainNews/PopularSection/PopularSection";
import FeaturedSection from "../Components/MainNews/FeaturedSection/FeaturedSection";
import MoreMain from "./more-main/MoreMain";
import axios from "axios";

const More = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getSportsData();
  }, []);

  async function getSportsData() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c07ec7ad52774adfa92c9e9fd31e6af5"
      )
      .then(function (response) {
        // handle success
        setData(response?.data?.articles.slice(0, 20));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  return (
    <div className="flex flex-col lg:flex-row gap-5 w-full lg:w-[1080px] m-auto p-5">
      <MoreMain data={data} />
      <PopularSection />
    </div>
  );
};

export default More;
