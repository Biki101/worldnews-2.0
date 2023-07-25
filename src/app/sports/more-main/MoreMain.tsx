import NewsTitle from "@/app/Components/NewsTitle/NewsTitle";
import NewsMain from "@/app/Components/news-main/NewsMain";
import React from "react";

const MoreMain = ({ data }: any) => {
  return (
    <div className="w-full">
      <NewsTitle title="Global News" />
      <NewsMain data={data} />
    </div>
  );
};

export default MoreMain;
