import React from "react";
import { BsFacebook, BsTwitter, BsPinterest, BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const TopBar = () => {
  return (
    <div className="bg-black text-white text-[18px] flex items-center">
      <div className="w-[1080px] m-auto p-[20px] flex gap-3 items-center justify-between">
        <span className="flex gap-3 items-center">
          <span className="hidden md:block">
            Kathmandu, Nepal HI 58 ℃ LO 50 ℃
          </span>
          <ul className="md:flex gap-3 hidden">
            <li className="link">About</li>
            <li className="link">Contact</li>
            <li className="link">Sign Up</li>
            <li className="link">Login</li>
          </ul>
        </span>
        <ul className="flex text-[24px] gap-3 items-center">
          <li className="link">
            <BsFacebook />
          </li>
          <li className="link">
            <BsTwitter />
          </li>
          <li className="link">
            <AiFillInstagram />
          </li>
          <li className="link">
            <BsYoutube />
          </li>
          <li className="link">
            <BsPinterest />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
