import Footer from "./Components/Footer/Footer";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import MainNavBar from "./Components/MainNavBar/MainNavBar";
import TopBar from "./Components/TopBar/TopBar";
import "./globals.css";
import { Fira_Sans } from "next/font/google";

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fira.className}>
        <TopBar />
        <HeroBanner />
        <MainNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
