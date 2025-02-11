import React from "react";
import { Check } from "../../../assets/svg";

const Brands = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <label className="flex items-center cursor-pointer relative">
        <input
          type="checkbox"
          className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm shadow hover:shadow-md border border-slate-300 checked:bg-[#FA8232] checked:border-[#FA8232] 
          hover:border-2 hover:border-[#FA8232] "
          id="check"
        />
        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <Check />
        </span>
      </label>
      <div className="flex items-center justify-start text-sm font-sans text-[#475156]">
        {title}
      </div>
    </div>
  );
};

export default Brands;
