import React from "react";

const MainNavBar = () => {
  return (
    <div className="w-[1080px] m-auto p-[10px] flex gap-3 items-center justify-center  border-b-2 border-black">
      <span className="cursor-pointer p-3 px-5 border-b-2 border-green-600 text-green-600">
        HOME
      </span>
      <span className="cursor-pointer p-3 px-5 ">GLOBAL</span>
      <span className="cursor-pointer p-3 px-5 ">MOST POPULAR</span>
      <span className="cursor-pointer p-3 px-5 ">CATEGORIES</span>
      <span className="cursor-pointer p-3 px-5 ">ABOUT</span>
      <span className="cursor-pointer p-3 px-5 ">CONTACT</span>
    </div>
  );
};

export default MainNavBar;
