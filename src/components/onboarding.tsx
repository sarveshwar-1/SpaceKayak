"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import OnboardingRight from "./onboarding-right";
import OnboardingLeft from "./onboarding-left"; 

const OnboardingPage = () => {
  return (
    <div className="min-h-screen flex ">
      {/* left */}
      <OnboardingLeft />
      {/* right */}

          <OnboardingRight />

    </div>
  );
};
export default OnboardingPage;
