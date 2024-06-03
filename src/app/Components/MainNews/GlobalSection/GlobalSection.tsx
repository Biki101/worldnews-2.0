"use client";

import React, { useEffect, useState } from "react";
import NewsTitle from "../../NewsTitle/NewsTitle";
import MainNewsComponent from "../MainNewsComponent/MainNewsComponent";
import axios from "axios";

const GlobalSection = () => {
  // const data =  getData();
  // const requiredData = data?.results?.filter(
  //   (items: any, index: any) => index < 4
  // );
  // const sportsData =  getSportsData();
  // const requiredSportsData = sportsData?.results?.filter(
  //   (items: any, index: any) => index < 4
  // );
  // const moviesData =  getMoviesData();
  // const requiredMoviesData = moviesData?.results?.filter(
  //   (items: any, index: any) => index < 4
  // );

  const [data, setData] = useState([]);
  const [sportsData, setSportsData] = useState([]);
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    getData();
    getSportsData();
    getMoviesData();
  }, []);

  async function getData() {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=temperature&apiKey=c07ec7ad52774adfa92c9e9fd31e6af5"
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
  async function getSportsData() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c07ec7ad52774adfa92c9e9fd31e6af5"
      )
      .then(function (response) {
        // handle success
        setSportsData(response?.data?.articles.slice(0, 4));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  async function getMoviesData() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=c07ec7ad52774adfa92c9e9fd31e6af5"
      )
      .then(function (response) {
        // handle success
        setMoviesData(response?.data?.articles.slice(0, 4));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  return (
    <div className="w-full lg:w-3/4">
      <div className="flex flex-col">
        <NewsTitle title="Global News" />
        <MainNewsComponent news={data || []} />
      </div>
      <div className="flex flex-col mt-5">
        <NewsTitle title="Sports" />
        <MainNewsComponent news={sportsData || []} />
      </div>
      <div className="flex flex-col mt-5">
        <NewsTitle title="Movies" />
        <MainNewsComponent news={moviesData || []} />
      </div>
    </div>
  );
};

export default GlobalSection;
