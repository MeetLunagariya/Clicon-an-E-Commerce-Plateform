import React, { useState } from "react";
import { nav_data } from "./Data";

const MiddleSection = () => {
  const [isActive, setIsActive] = useState(0);

  const handleSetActive = (event) => {
    setIsActive(event);
  };
  return (
    <div className="border border-[#E4E7E9] rounded-sm flex flex-col">
      <nav className="border-b border-[#E4E7E9]">
        <ul className="flex justify-center">
          {nav_data.map((title, index) => (
            <>
              <li
                key={index}
                className={`py-4 px-5 ${
                  isActive === index &&
                  " border-b-[4px] border-[#FA8232] text-gray-900"
                } hover:cursor-pointer`}
                onClick={() => handleSetActive(index)}
              >
                {title}
              </li>
            </>
          ))}
        </ul>
      </nav>
      <div className="px-7 py-7">
        <div>Discription Content</div>
      </div>
    </div>
  );
};

export default MiddleSection;
