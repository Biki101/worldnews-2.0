import { Fira_Sans } from "next/font/google";
import TopBar from "./Components/TopBar/TopBar";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import MainNavBar from "./Components/MainNavBar/MainNavBar";
import BreadSearch from "./Components/BreadSearch/BreadSearch";
import BreakingNews from "./Components/BreakingNews/BreakingNews";
import MainNews from "./Components/MainNews/MainNews";

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Home() {
  return (
    <div className={fira.className}>
      <div className="mb-20">
        <TopBar />
        <HeroBanner />
        <MainNavBar />
        <BreadSearch />
        <BreakingNews />
        <MainNews />
      </div>
    </div>
  );
}