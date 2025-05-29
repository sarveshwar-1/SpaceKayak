import React from "react";
import { EllipsisVertical } from "lucide-react";
import { Clock } from "lucide-react";
import Image from "next/image";
const DesertCard = () => {
  return (
    <div className="w-full col-span-1 h-[250px] sm:h-[300px] bg-white flex flex-col">
      <div className="flex justify-between items-center p-2 sm:p-4 w-full">
        <h2
          className="text-base sm:text-lg mb-1 sm:mb-2"
          style={{
            fontFamily: "Instrument Serif",
            fontWeight: 400,
            color: "#000000",
          }}
        >
          Desert Name
        </h2>
        <EllipsisVertical className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <Image
        src="/images/desert.jpg"
        alt="Desert Image"
        width={150}
        height={150}
        className="w-full h-[150px] sm:h-[200px] object-cover"
      />
      <div className="flex items-center">
        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-900 mt-1 sm:mt-2 ml-2 sm:ml-4" />
        <span className="text-gray-900 ml-1 sm:ml-2 mt-1 sm:mt-2 text-xs sm:text-sm">
          10 min
        </span>
      </div>
      <div className="flex justify-evenly items-center mt-1 sm:mt-2 p-1 sm:p-2 text-[#888888] text-xs sm:text-sm">
        <span>American</span>
        <span className="text-gray-600 font-bold">•</span>
        <span>Soup</span>
        <span className="text-gray-600 font-bold">•</span>
        <span>Warm</span>
        <span className="text-gray-600 font-bold">•</span>
      </div>
    </div>
  );
};

export default DesertCard;
