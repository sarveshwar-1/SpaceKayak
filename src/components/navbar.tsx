import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Camera } from "lucide-react";
import { CornerDownLeft } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-gray-50">
      <header className="bg-[#1e3b23] text-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg sm:text-xl lg:text-2xl text-[#e2d1c1]">
              Ingredia
            </h1>

            <div className="flex-1 max-w-2xl mx-2 sm:mx-4 lg:mx-8 bg-[#eeede5] hidden sm:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Recipes/ingredients/what's in your fridge"
                  className="w-full pl-8 sm:pl-10 pr-10 sm:pr-12 py-2 sm:py-3 text-sm sm:text-base text-gray-800 placeholder-gray-500"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1 sm:space-x-2">
                  <Camera className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-gray-600" />
                  <CornerDownLeft className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-gray-600" />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 flex items-center justify-center rounded-lg">
                <span className="text-xs font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    className="sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                  >
                    <rect
                      x="1"
                      y="4"
                      width="30"
                      height="24"
                      rx="4"
                      ry="4"
                      fill="#071b65"
                    ></rect>
                    <path
                      d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z"
                      fill="#fff"
                    ></path>
                    <rect x="13" y="4" width="6" height="24" fill="#fff"></rect>
                    <rect x="1" y="13" width="30" height="6" fill="#fff"></rect>
                    <rect
                      x="14"
                      y="4"
                      width="4"
                      height="24"
                      fill="#b92932"
                    ></rect>
                    <rect
                      x="14"
                      y="1"
                      width="4"
                      height="30"
                      transform="translate(32) rotate(90)"
                      fill="#b92932"
                    ></rect>
                    <path
                      d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                      opacity=".15"
                    ></path>
                    <path
                      d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                      fill="#fff"
                      opacity=".2"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/chef-icon.png"
                  alt="Chef profile"
                  width={24}
                  height={24}
                  className="object-cover sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                />
              </div>
            </div>
          </div>

          {/* Mobile search bar */}
          <div className="mt-4 bg-[#eeede5] sm:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Recipes/ingredients/what's in your fridge"
                className="w-full pl-10 pr-12 py-3 text-gray-800 placeholder-gray-500"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                <Camera className="text-gray-400 w-5 h-5 cursor-pointer hover:text-gray-600" />
                <CornerDownLeft className="text-gray-400 w-5 h-5 cursor-pointer hover:text-gray-600" />
              </div>
            </div>
          </div>

          <nav className="mt-4 sm:mt-6 flex justify-center items-center ">
            <div className="flex space-x-2 sm:space-x-4 lg:space-x-8 w-xl justify-between overflow-x-auto pb-2">
              <a
                href="#"
                className="text-white hover:text-green-200 font-medium whitespace-nowrap text-sm sm:text-base"
              >
                Recipes
              </a>
              <a
                href="#"
                className="text-white hover:text-green-200 font-medium whitespace-nowrap text-sm sm:text-base"
              >
                Occasions
              </a>
              <a
                href="#"
                className="text-white hover:text-green-200 font-medium whitespace-nowrap text-sm sm:text-base"
              >
                Goals
              </a>
              <a
                href="#"
                className="text-white hover:text-green-200 font-medium whitespace-nowrap text-sm sm:text-base"
              >
                Creators
              </a>
            </div>
          </nav>
        </div>
      </header>

      <div className="bg-[#abd27a] py-2 sm:py-4">
        <div className="w-full flex justify-center items-center px-2 sm:px-4">
          <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-8 overflow-x-auto pb-2">
            <span className="text-gray-900 font-bold whitespace-nowrap text-sm sm:text-base">
              Popular topic:
            </span>
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-6">
              <span className="text-gray-600 hover:text-green-900 cursor-pointer whitespace-nowrap text-sm sm:text-base">
                Refresh and Refuel
              </span>
              <span className="text-gray-600 font-bold hidden sm:inline">
                •
              </span>
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer whitespace-nowrap text-sm sm:text-base">
                Summer Fit
              </span>
              <span className="text-gray-600 font-bold hidden sm:inline">
                •
              </span>
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer whitespace-nowrap text-sm sm:text-base">
                Heart Healthy
              </span>
              <span className="text-gray-600 font-bold hidden md:inline">
                •
              </span>
              <span className="text-gray-600 hover:text-green-900 cursor-pointer whitespace-nowrap text-sm sm:text-base hidden md:inline">
                Insta Worthy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
