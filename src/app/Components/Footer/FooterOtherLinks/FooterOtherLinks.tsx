import React from "react";

const FooterCategories = () => {
  return (
    <div className="flex flex-col gap-5 w-[150px]">
      <span className="text-[18px]">Other Links</span>
      <ul className="flex flex-col gap-5">
        <li className=" link">Sports</li>
        <li className=" link">Movies</li>
        <li className=" link">Celebrities</li>
        <li className=" link">Books</li>
        <li className=" link">World-Wide</li>
      </ul>
    </div>
  );
};

export default FooterCategories;
