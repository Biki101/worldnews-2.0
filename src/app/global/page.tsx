import React from "react";
import NewsTitle from "../Components/NewsTitle/NewsTitle";
import PopularSection from "../Components/MainNews/PopularSection/PopularSection";
import FeaturedSection from "../Components/MainNews/FeaturedSection/FeaturedSection";
import GlobalMain from "./global-main/GlobalMain";

const page = async () => {
  const data = await getData();
  const requiredData = data?.results?.filter(
    (items: any, index: any) => index < 25
  );

  return (
    <div className="m-auto p-5 flex flex-col lg:flex-row w-full lg:w-[1080px] gap-5">
      <GlobalMain data={requiredData} />
      <PopularSection />
    </div>
  );
};

export default page;

async function getData() {
  const res = await fetch(
    `${process.env.BASE_URL}/svc/topstories/v2/world.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ`
  );
  return res.json();
}
