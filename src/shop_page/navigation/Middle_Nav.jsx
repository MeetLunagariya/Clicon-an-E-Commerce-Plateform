import React from "react";
import {
  Heart,
  Logo,
  MagnifyingGlass,
  ShoppingCartSimple,
  User,
} from "../../assets/svg";
import Search from "../common/Search";

const Middle_Nav = () => {
  return (
    <nav className="py-[20px] flex justify-between">
      <div>
        <Logo />
      </div>

      <Search classs="w-[450px]"/>

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
