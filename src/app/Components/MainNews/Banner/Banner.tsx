import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col">
      <Image
        src="/start-reading.jpg"
        height={150}
        width={600}
        className="w-[700px] h-[150px]"
        alt="banner"
      />
    </div>
  );
};

export default Banner;
