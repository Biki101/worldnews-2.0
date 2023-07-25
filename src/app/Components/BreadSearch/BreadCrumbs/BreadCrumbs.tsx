"use client";
import React from "react";
import { ImHome } from "react-icons/im";
import { FaRegNewspaper } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { BiWorld } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import { MdConnectWithoutContact, MdSportsSoccer } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";

const BreadCrumbs = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex items-center gap-3 text-[18px] opacity-60">
      <div className="flex items-center gap-2">
        <ImHome />
        <h1>WORLD NEWS</h1>
      </div>
      /
      <div className="flex items-center gap-2">
        {pathname === "/" ? (
          <>
            <FaRegNewspaper />
            <h1>Home</h1>
          </>
        ) : pathname === "/global" ? (
          <>
            <BiWorld />
            <h1>World</h1>
          </>
        ) : pathname === "/populars" ? (
          <>
            <BsFillStarFill />
            <h1>Top Stories</h1>
          </>
        ) : pathname === "/sports" ? (
          <>
            <MdSportsSoccer />
            <h1>Sports</h1>
          </>
        ) : pathname === "/about" ? (
          <>
            <FiHelpCircle />
            <h1>About</h1>
          </>
        ) : pathname === "/contact" ? (
          <>
            <MdConnectWithoutContact />
            <h1>Contact</h1>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BreadCrumbs;
