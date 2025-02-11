import React from "react";
import {
  Heart,
  Logo,
  ShoppingCartSimple,
  ShoppingCartSimple_advertise,
  User,
} from "../assets/svg";
import Search from "../shop_page/common/Search";

const Middle_Nav = () => {
  return (
    <nav className="py-[20px] flex justify-between px-4">
      <div>
        <Logo />
      </div>

      <Search classs="w-[450px] text-black" />

      <div className="flex gap-6 my-auto">
        <span className="relative hover:cursor-pointer">
          <ShoppingCartSimple />
          <div className="absolute top-0 right-0 bg-white rounded-full h-4 w-4 flex items-center justify-center text-sm text-[#1B6392] font-medium ">
            5
          </div>
        </span>
        <span>
          <Heart />
        </span>
        <span>
          <User />
        </span>
      </div>
    </nav>
  );
};

export default Middle_Nav;
