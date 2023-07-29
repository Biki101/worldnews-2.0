import BreadSearch from "./Components/BreadSearch/BreadSearch";
import DeskTopBar from "./Components/DesktopTopBar/DeskTopBar";
import Footer from "./Components/Footer/Footer";
import MainNavBar from "./Components/MainNavBar/MainNavBar";
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
        <DeskTopBar />
        <MainNavBar />
        <BreadSearch />
        {children}
        <Footer />
      </body>
    </html>
  );
}
