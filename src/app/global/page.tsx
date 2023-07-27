import React from "react";
import NewsTitle from "../Components/NewsTitle/NewsTitle";
import PopularSection from "../Components/MainNews/PopularSection/PopularSection";
import FeaturedSection from "../Components/MainNews/FeaturedSection/FeaturedSection";
import GlobalMain from "./global-main/GlobalMain";

const page = async () => {
  const data = await getData();
  const requiredData = data?.results?.filter(
    (items: any, index: any) => index < 21
  );

  return (
    <div className=" w-[1080px] m-auto p-5 flex gap-5">
      <GlobalMain data={requiredData} />
      <div className="w-1/4 flex flex-col gap-10">
        <PopularSection />
        <FeaturedSection />
      </div>
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
