import React from "react";

const page = () => {
  const productDetail = {
    id: 1,
    images: [
      "jordan-1.jpeg",
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
  return <div></div>;
};

export default page;
