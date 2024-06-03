"use client";
import { useEffect, useState } from "react";
import PopularSection from "../Components/MainNews/PopularSection/PopularSection";
import GlobalMain from "./global-main/GlobalMain";
import axios from "axios";

const Global = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=temperature&apiKey=c07ec7ad52774adfa92c9e9fd31e6af5"
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
    <div className="m-auto p-5 flex flex-col lg:flex-row w-full lg:w-[1080px] gap-5">
      <GlobalMain data={data} />
      <PopularSection />
    </div>
  );
};

export default Global;
