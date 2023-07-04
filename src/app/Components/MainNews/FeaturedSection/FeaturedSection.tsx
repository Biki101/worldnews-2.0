import React from "react";
import NewsTitle from "../../NewsTitle/NewsTitle";
import { BiRightArrowAlt } from "react-icons/bi";

const FeaturedSection = () => {
  return (
    <div className="w-1/4">
      <NewsTitle title="Featured" />
      <video controls className="p-5">
        <source src="/video/featured.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-red-600 text-white p-5 mb-10">
        <p className="text-[18px] font-semibold border-b-[1px] border-white">
          Subscribe
        </p>
        <p className="text-justify text-[14px] mt-2">
          Get all the latest content delivered to your mail once a month.
        </p>
        <form className="mt-2 flex items-center justify-between">
          <input
            type="email"
            className="p-2 w-3/4 outline-none text-black"
            placeholder="Email"
          />
          <button
            type="submit"
            className="text-black w-1/4 bg-white p-3 pr-2 flex justify-end cursor-pointer"
          >
            <BiRightArrowAlt className="text-black" />
          </button>
        </form>
      </div>
      <NewsTitle title="Tags" />
      <div className="flex flex-wrap gap-3 pt-3">
        <span className="border-[1px] border-black p-3 rounded-full ">
          Global
        </span>
        <span className="border-[1px] border-black p-3 rounded-full ">
          Sports
        </span>
        <span className="border-[1px] border-black p-3 rounded-full ">
          Books
        </span>
        <span className="border-[1px] border-black p-3 rounded-full ">
          Fashion
        </span>
        <span className="border-[1px] border-black p-3 rounded-full ">
          Movies
        </span>
        <span className="border-[1px] border-black p-3 rounded-full ">
          Politics
        </span>
        <span className="border-[1px] border-black p-3 rounded-full ">
          Pandemic
        </span>
        <span className="border-[1px] border-black p-3 rounded-full ">
          Health
        </span>
      </div>
    </div>
  );
};

export default FeaturedSection;
