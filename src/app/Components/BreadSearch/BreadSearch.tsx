import React from "react";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import SearchComponent from "./SearchComponent/SearchComponent";

const BreadSearch = () => {
  return (
    <div className="w-full lg:w-[1080px] p-[20px] m-auto flex flex-col gap-5 items-start justify-between">
      <BreadCrumbs />
      <SearchComponent />
    </div>
  );
};

export default BreadSearch;
