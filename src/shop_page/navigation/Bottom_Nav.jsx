import React from "react";
import {
  ArrowsCounterClockwise,
  CaretDown,
  Headphones,
  Info,
  MapPinLine,
  PhoneCall,
} from "../../assets/svg";

const nav_list = [
  { icon: <MapPinLine />, text: "track Order" },
  { icon: <ArrowsCounterClockwise />, text: "Compare" },
  { icon: <Headphones />, text: "Customer Suppport" },
  { icon: <Info />, text: "Need Help" },
];

const Bottom_Nav = () => {
  return (
    <nav className="flex px-[200px] h-[80px] justify-between py-[16px]">
      <div className="flex gap-6">
        <button  className=" flex rounded-sm h-[48px] w-[154px] py-[14px] px-6 bg-[#F2F4F5] gap-[8px]">
          <span className="text-sm text-[#191C1F]">All Category </span>
          <span className="mt-1">
            <CaretDown />
          </span>
        </button>

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
