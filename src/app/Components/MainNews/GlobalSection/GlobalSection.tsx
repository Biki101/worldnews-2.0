import React from "react";
import NewsTitle from "../../NewsTitle/NewsTitle";
import MainNewsComponent from "../MainNewsComponent/MainNewsComponent";

const GlobalSection = async () => {
  const data = await getData();
  const requiredData = data?.results?.filter(
    (items: any, index: any) => index < 4
  );
  const sportsData = await getSportsData();
  const requiredSportsData = sportsData?.results?.filter(
    (items: any, index: any) => index < 4
  );

  return (
    <div className=" w-3/4">
      <div className="flex flex-col">
        <NewsTitle title="Global News" />
        <MainNewsComponent news={requiredData} />
      </div>
      <div className="flex flex-col mt-5">
        <NewsTitle title="Sports News" />
        <MainNewsComponent news={requiredSportsData} />
      </div>
    </div>
  );
};

export default GlobalSection;

async function getData() {
  const res = await fetch(
    `${process.env.BASE_URL}/svc/topstories/v2/world.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ`
  );
  return res.json();
}

async function getSportsData() {
  const res = await fetch(
    `${process.env.BASE_URL}/svc/topstories/v2/sports.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ`
  );
  return res.json();
}
