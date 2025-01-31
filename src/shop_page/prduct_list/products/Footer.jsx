import React from "react";
import { ArrowLeft_footer, ArrowRight_footer } from "../../../assets/svg";

const Footer = () => {
  
  
  return (
    <div className="w-full flex justify-center items-center">
      <button className="flex justify-center items-center h-[48px] w-[48px] rounded-full border border-[#FA8232]">
        <ArrowLeft_footer />
      </button>
      {}
      <button className="flex justify-center items-center h-[48px] w-[48px] rounded-full border border-[#FA8232]">
        <ArrowRight_footer />
      </button>
    </div>
  );
};

export default Footer;
