import React from "react";
import { RightArrow } from "../../assets/svg";

const Title_Side_Button = ({ title, ...props }) => {
  return (
    <button className="flex gap-1 py-1.5 items-center" {...props}>
      <span className="font-semibold">{title}</span>
      <div className="w-[20px]  h-[20px]">
        <RightArrow />
      </div>
    </button>
  );
};

export default Title_Side_Button;
