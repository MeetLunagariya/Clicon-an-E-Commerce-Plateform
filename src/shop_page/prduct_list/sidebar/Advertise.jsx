import React from "react";
import { iwatch, iwatch_title } from "../../../assets/img";
import {
  ArrowRight_advertise,
  ShoppingCartSimple_advertise,
} from "../../../assets/svg";
const Advertise = () => {
  return (
    <div className="border-[5px] rounded-sm border-[#FFE7D6] p-6 w-full">
      <div className="flex flex-col gap-3 justify-center items-center w-full">
        <div>
          <img src={iwatch} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <img src={iwatch_title} alt="" />
          <p className="text-[#191C1F] text-2xl font-semibold text-center">Heavy on Features. Light on Price.</p>
          <div className="flex gap-2 justify-center">
            <span className="text-[#475156] text-xs font-semibold my-auto">Only for:</span>
            <span className="bg-[#F3DE6D] py-[6px] px-[12px] font-semibold rounded-sm">$299 USD</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <button className="bg-[#FA8232] flex text-white border border-[#FA8232] h-[48px] uppercase justify-center items-center text-sm rounded-sm font-semibold gap-2">
            <span>
              <ShoppingCartSimple_advertise />
            </span>
            <span>Add to Cart</span>
          </button>
          <button className="flex text-[#FA8232] border border-[#FA8232] h-[48px] uppercase justify-center items-center text-sm rounded-sm font-semibold gap-2">
            <span>View Details</span>
            <span>
              <ArrowRight_advertise />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
