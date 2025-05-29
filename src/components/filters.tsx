"use client";
import React from "react";
import { Minimize2 } from "lucide-react";
import { Slider } from "./ui/slider";

const Filters = () => {
  const filterOptions = ["Cuisine", "Diet", "Meals", "Ingredients"];
  const [selectedFilter, setSelectedFilter] = React.useState<string>("Cuisine");
  const [servings, setServings] = React.useState<number[]>([5]);
  return (
    <div className="bg-[#e8e4dc] col-span-2">
      <h2 className="text-xl font-bold text-gray-900 p-4">Filters</h2>
      <h3 className="text-lg font-semibold text-gray-900 mt-4 mx-4">
        Servings
      </h3>
      <Slider
        min={1}
        max={10}
        step={1}
        value={servings}
        onValueChange={setServings}
        showValue={true}
        className="mb-4 p-4"
      />
      <hr className="border-gray-500" />
      {filterOptions.map((option, id) => {
        return (
          <div key={id}>
            <div
              key={option}
              className={`flex items-center justify-between p-2 cursor-pointer ${
                selectedFilter === option ? "my-4" : ""
              }`}
              onClick={() => setSelectedFilter(option)}
            >
              <span className="text-gray-700">{option}</span>
              <Minimize2 className="text-gray-500" />
            </div>
            <hr key={id} className="border-gray-500" />
          </div>
        );
      })}
    </div>
  );
};

export default Filters;
