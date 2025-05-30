import React from "react";
import Image from "next/image";
import FoodCard from "./food-card";
import { LayoutGrid } from "lucide-react";
import DesertCard from "./desert-card";
import ArrowButton from "./ui/arrow-button";

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
    <div className="bg-[rgb(238,237,229)] w-full flex flex-col pt-2 sm:pt-4 relative">
      <div className="flex-col items-center">
        <span
          className="p-2 sm:p-4 text-black text-lg sm:text-xl block"
          style={{
            fontFamily: "var(--font-instrument-sans)",
            fontWeight: 500,
            color: "#000000",
          }}
        >
          What&apos;s in your Fridge?
        </span>
        <div className="flex justify-center sm:justify-evenly items-center w-full p-2 sm:p-4 overflow-x-auto">
          <div className="flex gap-2 sm:gap-4 w-full justify-evenly items-center">
            {foods.map((food, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={food.image}
                  alt={food.name}
                  width={32}
                  height={32}
                  className="sm:w-10 sm:h-10 rounded-full mb-1 sm:mb-2"
                />
                <span className="text-gray-700 text-xs sm:text-sm">
                  {food.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center w-full p-2 sm:p-4">
          <span
            className="p-2 sm:p-4 text-black text-lg sm:text-xl"
            style={{
              fontFamily: "var(--font-instrument-sans)",
              fontWeight: 500,
              color: "#000000",
            }}
          >
            Recommended for you
          </span>
          <div className="flex items-center gap-2 sm:gap-4">
            <svg
              width="15"
              height="9"
              viewBox="0 0 19 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-[19px] sm:h-[11px]"
            >
              <path
                d="M2.31179 10.5H0.34304L3.92756 0.318182H6.20455L9.79403 10.5H7.82528L5.10582 2.40625H5.02628L2.31179 10.5ZM2.37642 6.50781H7.74574V7.98935H2.37642V6.50781ZM10.6662 10.5V9.35156L15.8864 1.86435H10.6364V0.318182H18.1733V1.46662L12.9581 8.95384H18.2031V10.5H10.6662Z"
                fill="#262626"
              />
            </svg>

            <LayoutGrid className="text-gray-700 w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly items-center w-full p-2 sm:p-4 gap-4">
          <FoodCard />
          <div className="hidden sm:block">
            <FoodCard />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 p-2 sm:p-4">
          {Array.from({ length: 15 }).map((_, i) => (
            <DesertCard key={i} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-[rgb(238,237,229)] via-[rgba(238,237,229,0.8)] to-transparent pointer-events-none">
        <ArrowButton
          text="VIEW ALL RECIPES"
          className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 border border-black hover:border-gray-500 hover:bg-white/10 transition-all duration-200 group cursor-pointer pointer-events-auto text-sm sm:text-base"
          textcolor="text-gray-700 group-hover:text-black"
        />
      </div>
    </div>
  );
};

export default FooterMain;
