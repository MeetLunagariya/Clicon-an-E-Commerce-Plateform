import React from "react";
import Category from "./Category";
import Price_Range from "./Price_Range";
import Popular_Brands from "./Popular_Brands";
import Popular_Tags from "./Popular_Tags";
import Advertise from "./Advertise";

const Sidebar = () => {
  return (
    <div className="w-[312px]">
      <Category />
      <Price_Range />
      <Popular_Brands />
      <div className="py-4">
        <Popular_Tags text_color={'#191C1F'} selected_text_color={"#FA8232"} selected_border={'#FA8232'} selected_bg={'#FFF3EB'} border={'#E4E7E9'}/>
      </div>
      <Advertise />
    </div>
  );
};

export default Sidebar;
