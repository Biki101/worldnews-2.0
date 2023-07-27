import Image from "next/image";
import React from "react";
import PopularSection from "../Components/MainNews/PopularSection/PopularSection";
import FeaturedSection from "../Components/MainNews/FeaturedSection/FeaturedSection";
import PopularMain from "./popular-main/PopularMain";

const Populars = async () => {
  const data = await getData();
  const requiredData = data?.results?.filter(
    (items: any, index: any) => index < 21
  );
  return (
    <div className=" flex w-[1080px] m-auto p-5 gap-5">
      <PopularMain data={requiredData} />
      <div className="w-1/4 flex flex-col gap-10">
        <PopularSection />
        <FeaturedSection />
      </div>
    </div>
  );
};

export default Populars;

async function getData() {
  const res = await fetch(
    `${process.env.BASE_URL}/svc/topstories/v2/opinion.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ`
  );
  return res.json();
}
