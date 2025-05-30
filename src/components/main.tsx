import React from "react";
import ArrowButton from "./ui/arrow-button";

const Main = () => {
  return (
    <div className="mx-auto px-2 sm:px-4 bg-[#eeede5] w-full pt-2 sm:pt-4">
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-8 h-full mb-4">
        <div className="lg:col-span-2">
          <h2 className="text-2xl sm:text-3xl text-gray-900 font-light mb-4 sm:mb-6 leading-tight">
            See what Ingredia has to offer that makes us the best
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Explore our community and unique menus
          </p>
        </div>

        <div className="lg:col-span-5 h-full overflow-x-auto">
          <div className="flex gap-4 lg:gap-6 h-full pb-4">
            <div className="bg-inherit shadow-md overflow-hidden h-full flex-shrink-0 w-72 sm:w-80">
              <div className="flex flex-col">
                <div
                  className="bg-gray-200 h-[30vh] sm:h-[35vh] lg:h-[38vh] bg-cover bg-center"
                  style={{ backgroundImage: "url('images/image-1.jpg')" }}
                ></div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl text-gray-900 mb-2">
                    Any Occasion
                  </h3>
                  <hr className="border-gray-600" />
                  <p className="text-gray-600 mb-6 sm:mb-8">
                    Streamline shopping experience
                  </p>
                  <ArrowButton
                    className="inline-flex items-center px-3 sm:px-4 py-2 border border-gray-600 hover:bg-gray-50"
                    text="MORE"
                    textcolor="text-gray-900"
                  />
                </div>
              </div>
            </div>

            <div className="bg-inherit shadow-md overflow-hidden flex-shrink-0 w-72 sm:w-80">
              <div className="flex flex-col">
                <div
                  className="bg-yellow-100 h-[30vh] sm:h-[35vh] lg:h-[38vh] bg-cover bg-center"
                  style={{ backgroundImage: "url('images/image-2.jpg')" }}
                ></div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl text-gray-900 mb-2">
                    Gen Z Cookbook
                  </h3>
                  <hr className="border-gray-600" />
                  <p className="text-gray-600 mb-4">
                    Caribbean cooking made self-taught chef
                  </p>
                  <ArrowButton
                    className="inline-flex items-center px-3 sm:px-4 py-2 border border-gray-600 hover:bg-gray-50"
                    text="MORE"
                    textcolor="text-gray-900"
                  />
                </div>
              </div>
            </div>

            <div className="bg-inherit shadow-md overflow-hidden flex-shrink-0 w-72 sm:w-80">
              <div className="flex flex-col">
                <div
                  className="bg-orange-100 h-[30vh] sm:h-[35vh] lg:h-[38vh] bg-cover bg-center"
                  style={{ backgroundImage: "url('images/image-3.jpg')" }}
                ></div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl text-gray-900 mb-2">
                    Chris De La Rosa
                  </h3>
                  <hr className="border-gray-600" />
                  <p className="text-gray-600 mb-4">
                    Caribbean cooking made self-taught chef
                  </p>
                  <ArrowButton
                    className="inline-flex items-center px-3 sm:px-4 py-2 border border-gray-600 hover:bg-gray-50"
                    text="MORE"
                    textcolor="text-gray-900"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-600" />
    </div>
  );
};

export default Main;
