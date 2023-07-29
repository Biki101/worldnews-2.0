import React from "react";
import FooterAbout from "./FooterAbout/FooterAbout";
import FooterPopularPost from "./FooterPopularPost/FooterPopularPost";
import FooterCategories from "./FooterOtherLinks/FooterOtherLinks";

const Footer = () => {
  return (
    <div className="bg-[#222222] text-white">
      <div className="w-full lg:w-[1080px] m-auto p-[20px]  flex flex-col sm:flex-row sm:flex-wrap gap-10 justify-between pt-5">
        <FooterAbout />
        <FooterPopularPost />
        <FooterCategories />
      </div>
      <span className="bg-black flex justify-center p-3 text-[14px]">
        Copyright © 2023 WorldNews All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
