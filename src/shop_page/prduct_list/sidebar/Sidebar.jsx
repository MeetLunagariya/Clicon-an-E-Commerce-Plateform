import React from "react";
import Category from "./Category";
import Price_Range from "./Price_Range";

const Sidebar = () => {
  return (
    <div className="w-[312px]">
      <Category />
      <Price_Range />
    </div>
  );
};

export default Sidebar;
