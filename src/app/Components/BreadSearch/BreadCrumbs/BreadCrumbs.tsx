import React from "react";
import { ImHome } from "react-icons/im";
import { FaRegNewspaper } from "react-icons/fa";
const BreadCrumbs = () => {
  return (
    <div className="flex items-center gap-3 text-[18px] opacity-60">
      <div className="flex items-center gap-2">
        <ImHome />
        <h1>WORLD NEWS</h1>
      </div>
      /
      <div className="flex items-center gap-2">
        <FaRegNewspaper />
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default BreadCrumbs;
