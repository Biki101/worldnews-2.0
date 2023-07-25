import NewsTitle from "@/app/Components/NewsTitle/NewsTitle";
import NewsMain from "@/app/Components/news-main/NewsMain";
import React from "react";

const PopularMain = ({ data }: any) => {
  return (
    <div className="w-full">
      <NewsTitle title="Populars" />
      <NewsMain data={data} />
    </div>
  );
};

export default PopularMain;
