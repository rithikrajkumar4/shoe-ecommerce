import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductDisplayPage() {
  const products = [
    {
      id: 1,
      images: ["air-jordan.png", "air-jordan-carousel-2.png"],
      title: `Air Jordan XXXVIII "Fundamental"`,
      price: 200,
      soldout: false,
    },
    {
      id: 2,
      images: ["air-jordan.png", "air-jordan-carousel-2.png"],
      title: `Air Jordan XXXVIII "Fundamental"`,
      price: 200,
      soldout: false,
    },
    {
      id: 3,
      images: ["air-jordan.png", "air-jordan-carousel-2.png"],
      title: `Air Jordan XXXVIII "Fundamental"`,
      price: 200,
      soldout: false,
    },
    {
      id: 4,
      images: ["air-jordan.png", "air-jordan-carousel-2.png"],
      title: `Air Jordan XXXVIII "Fundamental"`,
      price: 200,
      soldout: false,
    },
    {
      id: 5,
      images: ["air-jordan.png", "air-jordan-carousel-2.png"],
      title: `Air Jordan XXXVIII "Fundamental"`,
      price: 200,
      soldout: false,
    },
    {
      id: 6,
      images: ["air-jordan.png", "air-jordan-carousel-2.png"],
      title: `Air Jordan XXXVIII "Fundamental"`,
      price: 200,
      soldout: false,
    },
    {
      id: 7,
      images: ["air-jordan.png", "air-jordan-carousel-2.png"],
      title: `Air Jordan XXXVIII "Fundamental"`,
      price: 200,
      soldout: false,
    },
    {
      id: 8,
      images: ["air-jordan.png", "air-jordan-carousel-2.png"],
      title: `Air Jordan XXXVIII "Fundamental"`,
      price: 200,
      soldout: false,
    },
  ];
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-9xl font-bold italic ">Product Page</h1>
      </div>
      <div>
        <div className="flex flex-wrap justify-center gap-10 mt-10 ">
          {products.map((item, index) => {
            return (
              <div
                key={index}
                className="hover:shadow-2xl rounded-3xl hover:bg-gray-300"
              >
                <Link href={`product/${item.id}`}>
                  <Image
                    className="p-4 rounded-3xl m-4 bg-white"
                    src={`/${item.images[0]}`}
                    alt={item.title}
                    width={500}
                    height={500}
                  />
                  <h3 className="text-3xl font-semibold text-center text-[#df265a] p-2">
                    {item.title}
                  </h3>
                  <h4 className="text-center p-4 font-bold text-4xl">
                    ${item.price}
                  </h4>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
