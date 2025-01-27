import React from "react";
import {
  Heart,
  Logo,
  MagnifyingGlass,
  ShoppingCartSimple,
  User,
} from "../../assets/svg";

const Middle_Nav = () => {
  return (
    <nav className="px-[200px] py-[20px] flex justify-between">
      <div>
        <Logo />
      </div>
      <div className="rounded-sm bg-white py-[14px] px-[20px] flex gap-[8px] ">
        <input
          type="text"
          placeholder="Search for anything..."
          className="min-w-[450px]"
        />
        <span className="text-center ">
          <MagnifyingGlass />
        </span>
      </div>
      <div className="flex gap-6 my-auto">
        <span>
          <ShoppingCartSimple />
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
