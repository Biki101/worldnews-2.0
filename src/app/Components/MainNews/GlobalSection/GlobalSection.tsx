import { globalNews, moviesNews, sportsNews } from "@/app/utils/getDate";
import NewsTitle from "../../NewsTitle/NewsTitle";
import MainNewsComponent from "../MainNewsComponent/MainNewsComponent";

const GlobalSection = () => {
  const data = globalNews.articles.slice(0, 4);
  const sportsData = sportsNews.articles.slice(0, 4);
  const moviesData = moviesNews.articles.slice(0, 4);

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
