import Image from "next/image";
import TopBar from "./Components/TopBar/TopBar";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import MainNavBar from "./Components/MainNavBar/MainNavBar";
import BreadSearch from "./Components/BreadSearch/BreadSearch";

export default function Home() {
  return (
    <>
      <TopBar />
      <HeroBanner />
      <MainNavBar />
      <BreadSearch />
    </>
  );
}
