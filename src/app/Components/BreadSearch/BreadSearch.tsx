import React from "react";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import SearchComponent from "./SearchComponent/SearchComponent";

const BreadSearch = () => {
  return (
    <div className="w-[1080px] p-[20px] m-auto flex items-center justify-between">
      <BreadCrumbs />
      <SearchComponent />
    </div>
  );
};

export default BreadSearch;
