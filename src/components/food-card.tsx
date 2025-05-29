import React from "react";
import Image from "next/image";
import { EllipsisVertical } from "lucide-react";

export default function FoodCard() {
  return (
    <div className="flex flex-col w-full max-w-[55vh] items-center justify-center bg-white p-2 sm:p-4 shadow-md text-black">
      <div className="flex justify-between w-full items-center mb-2 sm:mb-4">
        <h2
          className="text-lg sm:text-2xl mb-1 sm:mb-2"
          style={{
            fontFamily: "Instrument Serif",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#000000",
          }}
        >
          Fresh tomato blender salsa
        </h2>
        <EllipsisVertical className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>

      <Image
        src="/images/food-image.jpg"
        alt="Fresh Tomato Blender Salsa"
        width={518}
        height={275}
        className="w-full h-auto"
      />
      <ul className="list-disc list-inside space-y-1 mt-2 sm:mt-4 text-sm sm:text-base">
        <li className="text-gray-700">Ready in just 5 mins</li>
        <li className="text-gray-700">
          Perfect for serving with chips, tacos, or salads. Zesty, mild, and
          bursting with fresh flavors.
        </li>
      </ul>
      <div className="flex justify-start items-center gap-1 sm:gap-2 w-full p-1 sm:p-2 text-[#888888] text-sm sm:text-base">
        <span>American</span>
        <span className="text-gray-600 font-bold">•</span>
        <span>Soup</span>
        <span className="text-gray-600 font-bold">•</span>
        <span>Warm</span>
        <span className="text-gray-600 font-bold">•</span>
      </div>
    </div>
  );
}
