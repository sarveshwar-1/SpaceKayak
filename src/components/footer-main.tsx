import React from "react";
import Image from "next/image";
import FoodCard from "./food-card";
import { LayoutGrid } from "lucide-react";
import DesertCard from "./desert-card";

const FooterMain = () => {
  const foods = [
    {
      name: "Lemon",
      image: "/images/lemon.png",
    },
    {
      name: "Carrot",
      image: "/images/carrot.png",
    },
    {
      name: "Cheese",
      image: "/images/cheese.png",
    },
    {
      name: "Chicken",
      image: "/images/chicken.png",
    },
    {
      name: "Chilli",
      image: "/images/chillie.png",
    },
    {
      name: "Meat",
      image: "/images/meat.png",
    },
    {
      name: "Potato",
      image: "/images/potato.png",
    },
    {
      name: "Shrimp",
      image: "/images/shrimp.png",
    },
    {
      name: "Tomato",
      image: "/images/tomato.png",
    },
  ];
  return (
    <div className="bg-[rgb(238,237,229)] col-span-8 flex flex-col pt-4">
      <div className="flex-col items-center ">
        <span
          className="p-4 text-black text-xl"
          style={{
            fontFamily: "var(--font-instrument-sans)",
            fontWeight: 500,
            color: "#000000",
          }}
        >
          What&apos;s in your Fridge?
        </span>
        <div className="flex justify-evenly items-center w-full p-4">
          {foods.map((food, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={food.image}
                alt={food.name}
                width={40}
                height={40}
                className="rounded-full mb-2"
              />
              <span className="text-gray-700">{food.name}</span>
            </div>
          ))}
        </div>
      </div>{" "}
      <div>
        <div className="flex justify-between items-center w-full p-4">
          <span
            className="p-4 text-black text-xl"
            style={{
              fontFamily: "var(--font-instrument-sans)",
              fontWeight: 500,
              color: "#000000",
            }}
          >
            Recommended for you
          </span>
          <div className="flex items-center gap-4">
            <svg
              width="19"
              height="11"
              viewBox="0 0 19 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.31179 10.5H0.34304L3.92756 0.318182H6.20455L9.79403 10.5H7.82528L5.10582 2.40625H5.02628L2.31179 10.5ZM2.37642 6.50781H7.74574V7.98935H2.37642V6.50781ZM10.6662 10.5V9.35156L15.8864 1.86435H10.6364V0.318182H18.1733V1.46662L12.9581 8.95384H18.2031V10.5H10.6662Z"
                fill="#262626"
              />
            </svg>

            <LayoutGrid className="text-gray-700" size={24} />
          </div>
        </div>
        <div className="flex justify-evenly items-center w-full p-4">
          <FoodCard />
          <FoodCard />
        </div>
        <div className="grid grid-cols-5 gap-4 p-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <DesertCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
