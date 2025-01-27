import React from "react";
import { CaretDown } from "../../assets/svg";

const nav_list = []

const Bottom_Nav = () => {
  return (
    <nav className="flex px-[200px] py-4">
      <div className="flex ">
        <button className="flex rounded-sm h-[48px] w-[154px] py-[14px] px-6 bg-[#F2F4F5] gap-[8px]">
          <span className="text-sm text-[#191C1F]">All Category </span>
          <span className="">
            <CaretDown />
          </span>
        </button>

        <div>List....</div>
      </div>
      <div>Phone Number</div>
    </nav>
  );
};

export default Bottom_Nav;
