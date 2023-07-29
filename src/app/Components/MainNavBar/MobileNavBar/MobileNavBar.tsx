import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import Image from "next/image";
import { ImHome } from "react-icons/im";
import { usePathname } from "next/navigation";
import { BiWorld } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import { MdConnectWithoutContact, MdSportsSoccer } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import Link from "next/link";

const MobileNavBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const pathname = usePathname();
  const activeClass = "text-green-600 underline";

  return (
    <>
      <div className="lg:hidden flex justify-end mr-5 mt-5 hover:cursor-pointer">
        <GiHamburgerMenu
          className="text-3xl"
          onClick={() => setOpenModal(!openModal)}
        />
      </div>
      {/* ---------- Nav Bar ---------- */}
      <ul
        className={`${
          openModal ? "fixed" : "hidden"
        } left-0 top-0 z-50 w-[200px] bg-white p-3 h-[100%] text-lg`}
      >
        <div className="flex justify-between items-center">
          <Image src="/logo.png" alt="logo" height={50} width={50} />
          <GrClose className="mr-3" onClick={() => setOpenModal(false)} />
        </div>
        <Link
          onClick={() => setOpenModal(false)}
          href="/"
          className={`link flex gap-2 items-center ${
            pathname === "/" && activeClass
          }`}
        >
          <ImHome /> Home
        </Link>
        <Link
          onClick={() => setOpenModal(false)}
          href="/global"
          className={`link flex gap-2 items-center ${
            pathname === "/global" && activeClass
          }`}
        >
          <BiWorld />
          Global
        </Link>
        <Link
          onClick={() => setOpenModal(false)}
          href="/populars"
          className={`link flex gap-2 items-center ${
            pathname === "/populars" && activeClass
          }`}
        >
          <BsFillStarFill />
          Popular
        </Link>
        <Link
          onClick={() => setOpenModal(false)}
          href="/sports"
          className={`link flex gap-2 items-center ${
            pathname === "/sports" && activeClass
          }`}
        >
          <MdSportsSoccer />
          Sports
        </Link>
        <Link
          onClick={() => setOpenModal(false)}
          href="/about"
          className={`link flex gap-2 items-center ${
            pathname === "/about" && activeClass
          }`}
        >
          <FiHelpCircle />
          About
        </Link>
        <Link
          onClick={() => setOpenModal(false)}
          href="/contact"
          className={`link flex gap-2 items-center ${
            pathname === "/contact" && activeClass
          }`}
        >
          <MdConnectWithoutContact />
          Contact
        </Link>
      </ul>
    </>
  );
};

export default MobileNavBar;
