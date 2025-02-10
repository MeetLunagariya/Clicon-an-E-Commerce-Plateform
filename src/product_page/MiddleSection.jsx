import { useState } from "react";
import { nav_data } from "./Data";
import Description from "./Description";
import Feature from "./Feature";
import Shipping_Info from "./Shipping_Info";

const MiddleSection = () => {
  const [isActive, setIsActive] = useState(0);

  const handleSetActive = (event) => {
    setIsActive(event);
  };
  return (
    <div className="border border-[#E4E7E9] rounded-sm flex flex-col ">
      <nav className="border-b border-[#E4E7E9]">
        <ul className="flex justify-center">
          {nav_data.map((title, index) => (
            <>
              <li
                key={index}
                className={`py-4  px-5 font-medium ${
                  isActive === index
                    ? "text-gray-900 border-b-[4px] border-[#FA8232] "
                    : "text-gray-600"
                } hover:cursor-pointer uppercase`}
                onClick={() => handleSetActive(index)}
              >
                {title}
              </li>
            </>
          ))}
        </ul>
      </nav>
      <div className="px-7 py-7 grid grid-cols-4 gap-6">
        <Description />
        <Feature />
        <Shipping_Info />
      </div>
    </div>
  );
};

export default MiddleSection;
