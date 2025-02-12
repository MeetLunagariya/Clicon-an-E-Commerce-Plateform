import React, { useState } from "react";
import { CaretRight } from "../assets/svg";

const Category = ({ category,selected,setSelected }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <li
      key={category}
      role="menuitem"
      className={`cursor-pointer text-s flex w-full items-center py-2 pl-4 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 text-sm text-gray-600 hover:text-gray-900 justify-between ${selected === category && 'text-gray-900 bg-slate-100'}` }
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={()=>setSelected(category)}
    >
      <span>{category}</span>
      {(isHover || selected === category) && (
        <span className="mr-3">
          <CaretRight />
        </span>
      )}
    </li>
  );
};

export default Category;
