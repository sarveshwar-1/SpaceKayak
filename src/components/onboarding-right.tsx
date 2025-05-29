import { useState } from "react";
import TagButton from "./ui/TagButton";
import { Label } from "./ui/label";
import ArrowButton from "./ui/arrow-button";
import { useRouter } from "next/navigation";
import Input from "./ui/input";
type Tags = {
  servings: string;
  measurement: string;
  diet: string[];
  allergies: string[];
  skillLevel: string;
  appliances: string[];
};

function OnboardingRight() {
  const [selectedTags, setSelectedTags] = useState<Tags>({
    servings: "",
    measurement: "",
    diet: [],
    allergies: [],
    skillLevel: "",
    appliances: [],
  });
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
  const router = useRouter();
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
    <div className="w-3/5 max-[1199px]:w-full p-8 bg-[#fdf6ed] min-h-screen">
      <div className="h-[100%] w-[100%] flex flex-col justify-evenly">
        <div className="flex justify-between items-center ">
          <Label className="text-l text-black font-bold mb-4">
            How many people you cook for?
          </Label>
          <Input />
        </div>
        <div className="">
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
          <Label className="text-l text-black font-bold mb-4">
            Allergies and Restrictions
          </Label>
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
        <div className="mt-4">
          <Label className="text-l text-black font-bold mb-4">
            Skill Level
          </Label>
          <div className="flex gap-2">
            <TagButton
              isSelected={selectedTags.skillLevel === "Beginner"}
              onClick={() => handleSkillLevelChange("Beginner")}
            >
              Beginner
            </TagButton>
            <TagButton
              isSelected={selectedTags.skillLevel === "Intermediate"}
              onClick={() => handleSkillLevelChange("Intermediate")}
            >
              Intermediate
            </TagButton>
            <TagButton
              isSelected={selectedTags.skillLevel === "Advanced"}
              onClick={() => handleSkillLevelChange("Advanced")}
            >
              Advanced
            </TagButton>
          </div>
        </div>
        <div className="mt-4">
          <Label className="text-l text-black font-bold mb-4">Appliances</Label>
          <div className="flex flex-wrap gap-2">
            {applianceOptions.map((option) => (
              <TagButton
                key={option}
                isSelected={selectedTags.appliances.includes(option)}
                onClick={() => handleApplianceToggle(option)}
              >
                {option}
              </TagButton>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-evenly items-center">
          <ArrowButton
            text="SKIP FOR NOW"
            onClick={() => {
              router.push("/home");
            }}
            className="bg-[#fdf6ed] border border-gray-900 hover:bg-black transition-colors"
            textcolor="text-black hover:text-inherit"
          />
          <ArrowButton
            text="NEXT"
            onClick={() => {
              router.push("/home");
            }}
            className="bg-black border border-gray-900 hover:bg-[#fdf6ed] transition-colors"
            textcolor="text-inherit hover:text-black"
          />
        </div>
      </div>
    </div>
  );
}

export default OnboardingRight;
