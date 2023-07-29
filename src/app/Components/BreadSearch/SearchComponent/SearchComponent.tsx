import React from "react";
import { MdOutlineTravelExplore } from "react-icons/md";

const SearchComponent = () => {
  return (
    <div className="flex items-center self-end">
      <input
        type="text"
        placeholder="What can I help you with today?"
        className="outline-none border-[1px] border-black p-3 w-[270px]"
      />
      <div className="text-white bg-black p-3 border-[1px] border-black">
        <MdOutlineTravelExplore className="text-[26px]" />
      </div>
    </div>
  );
};

export default SearchComponent;
