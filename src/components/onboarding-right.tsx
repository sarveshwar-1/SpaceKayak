import { useState } from "react";
import TagButton from "./ui/TagButton";
import { Label } from "./ui/label";
type Tags = {
  servings: string;
  measurement: string;
  diet: [string];
  allergies: [string];
  skillLevel: string;
  appliances: [string];
};

function OnboardingRight() {
  const [selectedTags, setSelectedTags] = useState<Tags>({
    servings: "",
    measurement: "",
    diet: [""],
    allergies: [""],
    skillLevel: "",
    appliances: [""],
  });
  const handleServingsChange = (value: string) => {
    setSelectedTags((prev) => ({ ...prev, servings: value }));
  };

  const handleMeasurementChange = (value: string) => {
    setSelectedTags((prev) => ({ ...prev, measurement: value }));
  };

  const handleDietToggle = (diet: string) => {
    setSelectedTags((prev) => ({
      ...prev,
      diet: prev.diet.includes(diet)
        ? prev.diet.filter((d) => d !== diet)
        : [...prev.diet, diet],
    }));
  };

  const handleAllergyToggle = (allergy: string) => {
    setSelectedTags((prev) => ({
      ...prev,
      allergies: prev.allergies.includes(allergy)
        ? prev.allergies.filter((a) => a !== allergy)
        : [...prev.allergies, allergy],
    }));
  };

  const handleSkillLevelChange = (level: string) => {
    setSelectedTags((prev) => ({ ...prev, skillLevel: level }));
  };

  const handleApplianceToggle = (appliance: string) => {
    setSelectedTags((prev) => ({
      ...prev,
      appliances: prev.appliances.includes(appliance)
        ? prev.appliances.filter((a) => a !== appliance)
        : [...prev.appliances, appliance],
    }));
  };

  const dietOptions = [
    "No preference",
    "Vegetarian",
    "Vegan",
    "Kosher",
    "Ketogenic (Keto)",
    "Paleolithic (Paleo)",
    "Dairy Free",
    "Gluten Free",
    "Halal",
    "Pescatarian",
  ];

  const allergyOptions = [
    "Milk (Lactose)",
    "Eggs",
    "Fish",
    "Shellfish",
    "Peanuts",
    "Tree nuts",
    "Seasame",
    "Soy",
    "Wheat/Gluten",
  ];

  const applianceOptions = [
    "Conventional Oven",
    "Convection Oven",
    "Air Fryer",
    "Microwave Oven",
    "Pizza Oven",
    "Pressure Cooker",
    "Slow Cooker",
    "Multicooker",
    "Sous Vide",
    "Food Processor",
    "Blender",
    "Immersion Blender",
  ];
  return (
    <div className="w-3/5  p-8 bg-[#fdf6ed] min-h-screen">
      <div className="max-w-2xl">
        <div className="mb-8">
          <Label className="text-l text-black font-bold mb-4">
            Units of Measurement
          </Label>
          <div className="flex gap-2">
            <TagButton
              isSelected={selectedTags.measurement === "Metric"}
              onClick={() => handleMeasurementChange("Metric")}
            >
              Metric
            </TagButton>
            <TagButton
              isSelected={selectedTags.measurement === "Imperial"}
              onClick={() => handleMeasurementChange("Imperial")}
            >
              Imperial
            </TagButton>
          </div>
          <div className="mt-4 mb-2">
            <Label className="text-l text-black font-bold mb-4">Diet</Label>
            <div className="flex flex-wrap gap-2">
              {dietOptions.map((option) => (
                <TagButton
                  key={option}
                  isSelected={selectedTags.diet.includes(option)}
                  onClick={() => handleDietToggle(option)}
                >
                  {option}
                </TagButton>
              ))}
            </div>
          </div>
          
          <div className="mt-4">
            <Label className="text-l text-black font-bold mb-4">Allergies</Label>
            <div className="flex flex-wrap gap-2">
              {allergyOptions.map((option) => (
                <TagButton
                  key={option}
                  isSelected={selectedTags.allergies.includes(option)}
                  onClick={() => handleAllergyToggle(option)}
                >
                  {option}
                </TagButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingRight;
