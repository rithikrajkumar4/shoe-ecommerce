import Link from "next/link";
import React from "react";
import { SiJordan, SiNike } from "react-icons/si";
import { BsSearch, BsCart } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex justify-between m-10">
      <div className="flex">
        <div className="text-8xl">
          <SiNike />
        </div>
        <div className="flex flex-col items-center">
          <SiJordan className="text-8xl" />
          <span className="uppercase font-bold text-2xl font-mono">jordan</span>
        </div>
      </div>
      <div className="flex gap-8 text-3xl items-center uppercase font-semibold">
        <Link href={"/"} className="hover:underline hover:text-red-600">
          Home
        </Link>
        <Link href={"/"} className="hover:underline hover:text-red-600">
          Man
        </Link>
        <Link href={"/"} className="hover:underline hover:text-red-600">
          Woman
        </Link>
        <Link href={"/"} className="hover:underline hover:text-red-600">
          Kids
        </Link>
        <Link href={"/"} className="hover:underline hover:text-red-600">
          Sale
        </Link>
      </div>
      <div className="flex items-center gap-12 text-3xl">
        <BsSearch />
        <BsCart />
        <Link href={"/auth/signup"} className="cursor-pointer">
          <FaRegUserCircle />
        </Link>
      </div>
    </div>
  );
};

export default Header;
