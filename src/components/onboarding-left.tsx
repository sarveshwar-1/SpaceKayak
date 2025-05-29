import React from "react";

function OnboardingLeft() {
  return (
    <div
      className="flex items-center justify-center w-2/5 p-8 min-h-screen bg-cover bg-center bg-no-repeat max-[1199px]:hidden"
      style={{ backgroundImage: "url(/images/bg-onboarding.jpg)" }}
    >
      <div className="relative w-[48vh] h-[48vh] rounded-full bg-[#2d4a2b] shadow-lg flex items-center justify-center text-center p-4">
        <div className="text-white text-center leading-tight">
          <div
            className="text-5xl font-light mb-1"
            style={{
              fontFamily: "'ITC Garamond Std', 'Playfair Display', serif",
              fontWeight: 300,
              fontStyle: "normal",
              color: "",
            }}
          >
            First, let's
          </div>
          <div
            className="text-5xl font-light mb-1 "
            style={{
              fontFamily: "'ITC Garamond Std', 'Playfair Display', serif",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#fedec2",
            }}
          >
            personalize
          </div>
          <div
            className="text-5xl font-light"
            style={{
              fontFamily: "'ITC Garamond Std', 'Playfair Display', serif",
              fontWeight: 300,
              fontStyle: "normal",
            }}
          >
            your preferences
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingLeft;
