import { Fira_Sans } from "next/font/google";
import BreakingNews from "./Components/BreakingNews/BreakingNews";
import MainNews from "./Components/MainNews/MainNews";

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Home() {
  return (
    <div className={`${fira.className}`}>
      <BreakingNews />
      <MainNews />
    </div>
  );
}
