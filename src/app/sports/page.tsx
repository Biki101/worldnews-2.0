import Image from "next/image";
import React from "react";
import PopularSection from "../Components/MainNews/PopularSection/PopularSection";
import FeaturedSection from "../Components/MainNews/FeaturedSection/FeaturedSection";
import MoreMain from "./more-main/MoreMain";

const More = async () => {
  const data = await getData();
  const requiredData = data?.results?.filter(
    (items: any, index: any) => index < 21
  );
  return (
    <div className="flex gap-5 w-[1080px] m-auto p-5">
      <MoreMain data={requiredData} />
      <div className="w-1/4 flex flex-col gap-10">
        <PopularSection />
        <FeaturedSection />
      </div>
    </div>
  );
};

export default More;

async function getData() {
  const res = await fetch(
    `${process.env.BASE_URL}/svc/topstories/v2/sports.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ`
  );
  return res.json();
}
