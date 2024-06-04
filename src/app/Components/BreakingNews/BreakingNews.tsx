import { topHeadlines } from "@/app/utils/getDate";
import BreakingNewsComponent from "./BreakingNewsComponent/BreakingNewsComponent";

const BreakingNews = () => {
  const data = topHeadlines?.articles;

  return (
    <div className="w-full lg:w-[1080px] m-auto p-[20px]">
      <h2 className="font-extrabold text-[26px] mb-3">Breaking News</h2>
      <div className="flex flex-col lg:flex-row  w-full lg:h-[500px] gap-3">
        <div className="h-[500px] w-full">
          <BreakingNewsComponent news={data?.length > 0 ? data[0] : null} />
        </div>
        <div className="w-full h-[600px] lg:h-full flex flex-col gap-3">
          <BreakingNewsComponent news={data?.length > 0 ? data[1] : null} />
          <div className="h-[400px] lg:h-1/2 flex gap-3">
            <BreakingNewsComponent news={data?.length > 0 ? data[2] : null} />
            <BreakingNewsComponent news={data?.length > 0 ? data[3] : null} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
