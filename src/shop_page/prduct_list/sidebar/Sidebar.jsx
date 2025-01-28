import React from "react";
import Category from "./Category";
import Price_Range from "./Price_Range";
import Popular_Brands from "./Popular_Brands";
import Popular_Tags from "./Popular_Tags";

const Sidebar = () => {
  return (
    <div className="w-[312px]">
      <Category />
      <Price_Range />
      <Popular_Brands/>
      <Popular_Tags/>
    </div>
  );
};

export default Sidebar;
