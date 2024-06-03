"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PopularSection from "../Components/MainNews/PopularSection/PopularSection";
import FeaturedSection from "../Components/MainNews/FeaturedSection/FeaturedSection";
import PopularMain from "./popular-main/PopularMain";
import axios from "axios";

const Populars = () => {
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
        setData(response?.data?.articles.slice(0, 20));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  return (
    <div className=" flex-col lg:flex-row w-full lg:w-[1080px] m-auto p-5 gap-5">
      <PopularMain data={data} />
      {/* <PopularSection /> */}
    </div>
  );
};

export default Populars;
