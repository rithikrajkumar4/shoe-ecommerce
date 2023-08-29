import React from "react";
import Image from "next/image";

export default function CarouselComponent() {
  const name = `Air Jordan XXXVIII "Fundamental"`;

  return (
    <div>
      <div className=" flex justify-evenly items-center ">
        <div className="z-10  ">
          <p className="text-[250px] font-mono font-bold italic uppercase">
            Jump
          </p>
          <p className="text-5xl font-sans italic uppercase text-[#df265a]">
            Basketball Shoes
          </p>
        </div>
        <Image
          className="absolute z-1  -rotate-45 mx-[30%]"
          src={"/air-jordan.png"}
          width={900}
          height={900}
          alt="air-jordan"
        />
        <div className="z-10 flex flex-col">
          <div className="flex justify-end">
            <p className="text-5xl italic font-semibold text-[#df265a]">
              2023 pf
            </p>
          </div>
          <p className="text-[250px] font-mono font-bold uppercase">
            <span className="text-white ">m</span>an
          </p>
          <div className="flex justify-end animate-bounce items-center">
            <p className="text-xl italic border-4 w-[150px] text-center h-[40px] border-red-500 text-white bg-[#df265a] rounded-xl font-bold">
              exclusive
            </p>
          </div>
          <div className="flex items-center ">
            <span className="text-6xl font-bold italic text-[#df265a]">
              200$
            </span>
            <p className="w-[250px] m-8 text-[23px] font-mono">{name}</p>
          </div>
        </div>
      </div>
      <div className="z-10 flex justify-evenly">
        <div className=" z-10 w-[20%] mr-16">
          <p className="text-4xl  text-center my-4 font-bold uppercase">
            Shoes of the year
          </p>
          <p className="text-center text-[#df265a] italic text-xl font-mono ">
            Maybe it’s the iconic connection to Jordan Brand heritage, as close
            to a bloodline as a colorway can get. Or maybe they just look really
            good together.
          </p>
        </div>
        <div className="flex gap-8 my-10">
          <button className=" w-[150px] h-[60px] border-4 text-xl text-center text-[#df265a] border-[#df265a] hover:bg-[#df265a] hover:text-white">
            Add To Cart
          </button>
          <button className=" w-[150px] h-[60px] border-4 text-xl text-center text-[#df265a] border-[#df265a] hover:bg-[#df265a] hover:text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
