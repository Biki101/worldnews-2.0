import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="w-[1080px] m-auto p-[20px] flex justify-between">
      {/* -----------logo ------------- */}
      <Image
        src="/logo.png"
        alt="logo"
        width={150}
        height={150}
        className="border-2 border-green-600 w-[150px] h-[150px]"
      />
      {/* -----------logo End ------------- */}
      <div>
        <Image
          src="/start-reading.jpg"
          height={150}
          width={600}
          className="w-[700px] h-[150px]"
          alt="banner"
        />
        <p className="relative bottom-14 left-4 text-white border-2 border-white p-2 w-fit hover:cursor-pointer hover:underline">
          Start Exploring...
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
