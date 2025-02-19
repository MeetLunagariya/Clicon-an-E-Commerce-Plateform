import React, { useRef, useState } from "react";
import {
  ArrowsCounterClockwise,
  CaretDown,
  Headphones,
  Info,
  MapPinLine,
  PhoneCall,
} from "../assets/svg";
import { categories } from "./data";
import Category from "./Category";
import Selected_Categoty from "./Selected_Categoty";

const nav_list = [
  { icon: <MapPinLine />, text: "Track Order" },
  { icon: <ArrowsCounterClockwise />, text: "Compare" },
  { icon: <Headphones />, text: "Customer Support" },
  { icon: <Info />, text: "Need Help" },
];

const Bottom_Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = (event) => {
    if (
      !buttonRef.current.contains(event.relatedTarget) &&
      !dropdownRef.current.contains(event.relatedTarget)
    ) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="flex h-[80px] bg-[#FFFFFF] justify-between py-[16px] px-4">
      <div className="flex gap-6">
        <div className="relative" onMouseLeave={handleMouseLeave}>
          <button
            data-popover-target="menu-1"
            data-popover-nested="true"
            type="button"
            className={`py-3.5 px-6 rounded-sm focus:outline-none flex justify-center items-center gap-3 ${
              isOpen && "bg-[#FA8232]"
            }`}
            ref={buttonRef}
            onMouseEnter={handleMouseEnter}
          >
            <div
              className={`text-sm text-nowrap ${isOpen ? " text-white" : ""}`}
            >
              All Category
            </div>
            <span
              className={`transition-transform ${
                isOpen ? "rotate-180 text-white" : ""
              }`}
            >
              <CaretDown />
            </span>
          </button>
          {isOpen && (
            <>
            <div className="h-3"></div>
            <ul
              role="menu"
              data-popover="menu-1"
              data-popover-placement="bottom"
              className="absolute top-full mt-3 z-10 min-w-[240px] rounded-sm border border-slate-200 bg-white focus:outline-none transition-opacity  py-3"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {categories.map((category) => (
                <Category
                  key={category.id}
                  category={category}
                  setSelected={setSelected}
                  selected={selected}
                />
              ))}
              <Selected_Categoty selected={selected} />
            </ul></>
          )}
        </div>
        <div className="flex gap-6">
          <ul className="flex gap-6 py-[14px]">
            {nav_list.map((item) => (
              <li className="flex gap-2" key={item.text}>
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-[8px] py-[14px]">
        <span>
          <PhoneCall />
        </span>
        <span>
          <p>+1-202-555-0104</p>
        </span>
      </div>
    </nav>
  );
};

export default Bottom_Nav;
