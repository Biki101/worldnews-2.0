import Image from "next/image";
import React from "react";

const More = () => {
  return (
    <div className="flex justify-center items-center w-[1080px] h-[300px] m-auto p-5">
      <Image
        src="/inprogress.png"
        alt="inprogress"
        width={500}
        height={500}
        className="w-[200px]"
      />
    </div>
  );
};

export default More;
