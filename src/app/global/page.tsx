import PopularSection from "../Components/MainNews/PopularSection/PopularSection";
import GlobalMain from "./global-main/GlobalMain";
import { globalNews } from "../utils/getDate";

const Global = () => {
  const data = globalNews.articles.slice(0, 20);

  return (
    <div className="m-auto p-5 flex flex-col lg:flex-row w-full lg:w-[1080px] gap-5">
      <GlobalMain data={data} />
      <PopularSection />
    </div>
  );
};

export default Global;
