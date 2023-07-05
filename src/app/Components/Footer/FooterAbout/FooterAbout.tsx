import Image from "next/image";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsPinterest, BsTwitter, BsYoutube } from "react-icons/bs";

const FooterAbout = () => {
  return (
    <div className="flex flex-col gap-5 w-[450px]">
      <Image src="/logo.png" alt="logo.png" height={150} width={150} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sint
        suscipit tenetur quidem, quibusdam commodi aliquam magni sed architecto
        ut.
      </p>
      <p>Any questions? Call us on (+1) 96 716 6879</p>
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
  );
};

export default FooterAbout;
