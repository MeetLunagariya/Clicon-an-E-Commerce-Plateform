import React from "react";

const SubCategory = ({ sub_title }) => {
  return (
    <li
      key={sub_title}
      role="menuitem"
      className="cursor-pointer text-[#5F6C72] text-sm flex w-full items-center py-2 transition-all  hover:bg-gray-50 hover:text-gray-900 pl-4"
    >
      {sub_title}
    </li>
  );
};

export default SubCategory;
