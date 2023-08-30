import React from "react";
import Link from "next/link";

export default function MainNavbar() {
  const navComp = [
    "home",
    "apparels",
    "sole*rangers",
    "sneakers",
    "dunks",
    "jordans",
  ];
  return (
    <div>
      <nav className="flex justify-center gap-10 m-20 text-3xl uppercase">
        {navComp.map((item, index) => {
          return (
            <Link
              className="border-4 p-4 hover:text-white hover:bg-[#df265a] hover:text-4xl border-[#df265a]"
              key={index}
              href={`/${item === "home" ? "" : item}`}
            >
              {item}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
