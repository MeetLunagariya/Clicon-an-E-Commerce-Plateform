import React from "react";
import { Heart, Logo, ShoppingCartSimple, User } from "../assets/svg";
import Search from "../shop_page/common/Search";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Middle_Nav = () => {
  const navigate = useNavigate();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <nav className="py-[20px] flex justify-between px-4">
      <div>
        <Logo />
      </div>

      <Search classs="w-[450px] text-black" />

      <div className="flex gap-6 my-auto">
        <span
          className="relative hover:cursor-pointer"
          onClick={() => navigate("./shoping_cart")}
        >
          <ShoppingCartSimple />
          <div className="absolute top-0 right-0 bg-white rounded-full h-4 w-4 flex items-center justify-center text-sm text-[#1B6392] font-medium ">
            {totalQuantity}
          </div>
        </span>
        <button>
          <Heart />
        </button>
        <button >
          <User />
        </button>
      </div>
    </nav>
  );
};

export default Middle_Nav;
