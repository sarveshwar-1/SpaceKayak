import React from "react";
import Filters from "./filters";
import FooterMain from "./footer-main";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 bg-[##eeede5]">
      <div className="lg:col-span-2">
        <Filters />
      </div>
      <div className="lg:col-span-8">
        <FooterMain />
      </div>
    </div>
  );
};

export default Footer;
