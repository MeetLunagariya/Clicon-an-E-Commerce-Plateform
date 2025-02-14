import React, { useEffect, useRef, useState } from "react";
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

import { useNavigate } from "react-router";
import Selected_Categoty from "./Selected_Categoty";

const nav_list = [
  { icon: <MapPinLine />, text: "track Order" },
  { icon: <ArrowsCounterClockwise />, text: "Compare" },
  { icon: <Headphones />, text: "Customer Suppport" },
  { icon: <Info />, text: "Need Help" },
];

const Bottom_Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  // console.log("selected", selected);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleCategory = () => {
    setIsOpen((prevState) => !prevState);
  };

  // To Manage DropDown Behaviour
  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef.current && buttonRef.current.contains(event.target)) {
        return;
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex h-[80px] bg-[#FFFFFF] justify-between py-[16px] px-4">
      <div className="  flex">
        <div className="relative">
          <button
            data-popover-target="menu-1"
            data-popover-nested="true"
            type="button"
            className={`py-3.5 px-6 rounded-sm  focus:outline-none flex justify-center  items-center gap-3 ${
              isOpen && "bg-[#FA8232]"
            }`}
            ref={buttonRef}
            onClick={() => handleCategory()}
          >
            <div
              className={`text-sm text-nowrap ${isOpen ? " text-white" : ""}`}
            >
              All Category
            </div>

            <span
              className={`transition-transform ${
                isOpen ? "transform rotate-180 text-white" : ""
              }`}
            >
              <CaretDown />
            </span>
          </button>
          {isOpen && (
            <ul
              role="menu"
              data-popover="menu-1"
              data-popover-placement="bottom"
              className={`absolute top-full min-w-[240px] rounded-sm border border-slate-200 bg-white focus:outline-none transition-opacity mt-3 py-3`}
              ref={dropdownRef}
            >
              {categories.map((category) => (
                <>
                  <Category
                    category={category}
                    setSelected={setSelected}
                    selected={selected}
                  />
                </>
              ))}
              <Selected_Categoty selected={selected} />
            </ul>
          )}
        </div>
        <div className="flex gap-6">
          <div>
            <ul className="flex gap-6 py-[14px]">
              {nav_list.map((item) => (
                <>
                  <li className="flex gap-2" key={item.text}>
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                </>
              ))}
            </ul>
          </div>
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
