"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const page = () => {
  const [imgNo, setImgNo] = useState(0);
  function decrementImage() {
    const N = productDetail.images.length;
    if (imgNo == 0) setImgNo(8);
    else setImgNo(imgNo - 1);
  }
  function incrementImage() {
    const N = productDetail.images.length;
    if (imgNo == 8) setImgNo(0);
    else setImgNo(imgNo + 1);
  }
  function changeImgNoto(index: number) {
    setImgNo(index);
  }
  const productDetail = {
    id: 1,
    images: [
      "jordan-1.png",
      "jordan-2.png",
      "jordan-3.png",
      "jordan-4.png",
      "jordan-5.png",
      "jordan-6.png",
      "jordan-7.png",
      "jordan-8.png",
      "jordan-9.png",
    ],
    title: `Air Jordan XXXVIII "Fundamental"`,
    category: "shoes",
    type: "jordans",
    desc: "Black, white and red. What is it about this color combination that hits so hard? Maybe it’s in our DNA—they’re the first three colors babies can see, after all. Maybe it’s the iconic connection to Jordan Brand heritage, as close to a bloodline as a colorway can get. Or maybe they just look really good together.",
    price: 200,
    soldout: false,
    stock: {
      "6": 10,
      "7": 10,
      "8": 10,
      "9": 10,
      "10": 10,
    },
  };
  return (
    <div className="flex justify-center font-mono">
      <div className="flex flex-col h-[60vh] overflow-scroll">
        {productDetail.images.map((item, index) => {
          return (
            <Image
              onClick={() => {
                changeImgNoto(index);
              }}
              key={index}
              className="m-4 cursor-pointer hover:border-4"
              src={`/${item}`}
              alt={`${productDetail.title}-${index}`}
              width={100}
              height={200}
            />
          );
        })}
      </div>
      <div>
        <Image
          src={`/${productDetail.images[imgNo]}`}
          alt={productDetail.title}
          width={700}
          height={600}
        />
        <div className="flex justify-end">
          <button className="text-4xl" onClick={() => decrementImage()}>
            <BsArrowLeftCircle />
          </button>
          <button className="text-4xl" onClick={() => incrementImage()}>
            <BsArrowRightCircle />
          </button>
        </div>
      </div>
      <div>
        <h6 className="uppercase text-center text-2xl font-bold m-4">
          {productDetail.type}
        </h6>
        <h1 className="text-center text-3xl m-4">{productDetail.title}</h1>
        <h2 className="text-4xl font-bold ml-10">${productDetail.price}</h2>
        <div>
          <h2 className="text-center text-4xl">Sizes Availabel:</h2>
          <div className="flex justify-center">
            <div className="flex justify-center text-white flex-wrap w-[70%]">
              <h2 className="m-4 bg-black text-2xl h-[42px] w-[120px] text-center pt-1.5 font-bold rounded-full">
                UK6:<span>{productDetail.stock["6"]}</span>
              </h2>
              <h2 className="m-4 bg-black text-2xl h-[42px] w-[120px] text-center pt-1.5  font-bold rounded-full">
                UK7:<span>{productDetail.stock["7"]}</span>
              </h2>
              <h2 className="m-4 bg-black text-2xl h-[42px] w-[120px] text-center pt-1.5  font-bold rounded-full">
                UK8:<span>{productDetail.stock["8"]}</span>
              </h2>
              <h2 className="m-4 bg-black text-2xl h-[42px] w-[120px] text-center pt-1.5  font-bold rounded-full">
                UK9:<span>{productDetail.stock["9"]}</span>
              </h2>
              <h2 className="m-4 bg-black text-2xl h-[42px] w-[120px] text-center pt-1.5  font-bold rounded-full">
                UK10:<span>{productDetail.stock["10"]}</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="text-center text-xl w-[700px] m-4">
          <span className="text-3xl font-bold">Description:</span>
          {productDetail.desc}
        </div>
        <div className="flex">
          <button className="m-4 p-4 bg-black text-white ml-10 hover:bg-gray-600 text-2xl ">
            Add to Cart
          </button>
          <button className="m-4 p-4 bg-black text-white hover:bg-gray-600 text-2xl ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
