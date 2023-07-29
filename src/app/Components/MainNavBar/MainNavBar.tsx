"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import MobileNavBar from "./MobileNavBar/MobileNavBar";

const MainNavBar = () => {
  const route = usePathname();

  const activeStyle = "border-b-2 border-green-600 text-green-600";
  return (
    <>
      <div className="w-[1080px] m-auto p-[10px] lg:flex gap-3 items-center justify-center  border-b-2 border-black hidden">
        <Link
          href="/"
          className={`cursor-pointer p-3 px-5 ${route === "/" && activeStyle}`}
        >
          HOME
        </Link>
        <Link
          href="/global"
          className={`cursor-pointer p-3 px-5 ${
            route === "/global" && activeStyle
          }`}
        >
          GLOBAL
        </Link>
        <Link
          href="/populars"
          className={`cursor-pointer p-3 px-5 ${
            route === "/populars" && activeStyle
          }`}
        >
          MOST POPULAR
        </Link>
        <Link
          href="/sports"
          className={`cursor-pointer p-3 px-5 ${
            route === "/sports" && activeStyle
          }`}
        >
          SPORTS
        </Link>
        <Link
          href="/about"
          className={`cursor-pointer p-3 px-5 ${
            route === "/about" && activeStyle
          }`}
        >
          ABOUT
        </Link>
        <Link
          href="/contact"
          className={`cursor-pointer p-3 px-5 ${
            route === "/contact" && activeStyle
          }`}
        >
          CONTACT
        </Link>
      </div>
      <MobileNavBar />
    </>
  );
};

export default MainNavBar;
