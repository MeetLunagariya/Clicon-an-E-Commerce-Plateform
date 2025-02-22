import React from "react";
import {
  ArrowsCounterClockwise,
  ClockClockwise,
  Gear,
  Heart_2,
  MapPinLine,
  Notebook,
  ShoppingCartSimple_2,
  SignOut,
  Stack_2,
  Storefront,
} from "../assets/svg";
import { Links, NavLink, useNavigate } from "react-router";

const data = [
  { title: "Dashboard", icon: <Stack_2 />, to: "dashboard" },
  { title: "Order History", icon: <Storefront />, to: "order_history" },
  { title: "Track Order", icon: <MapPinLine />, to: "track_order" },
  {
    title: "Shopping Cart",
    icon: <ShoppingCartSimple_2 />,
    to: "/shoping_cart",
  },
  { title: "Wishlist", icon: <Heart_2 />, to: "/wishlist" },
  { title: "Compare", icon: <ArrowsCounterClockwise />, to: "compare" },
  { title: "Cards & Address", icon: <Notebook />, to: "address" },
  { title: "Browsing History", icon: <ClockClockwise />, to: "history" },
  { title: "Setting", icon: <Gear />, to: "setting" },
  { title: "Log-out", icon: <SignOut />, to: "logout" },
];

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <section className="shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)] mr-10 rounded-sm border py-4 ">
      <ul className="flex flex-col gap-2">
        {data.map((item) => (
          <>
            <li
              className="flex gap-2 hover:text-white text-[#5F6C72] hover:bg-[#FA8232] text-sm hover:cursor-pointer px-5 py-3 font-medium"
              onClick={() => navigate(`${item.to}`)}
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </li>
          </>
        ))}
      </ul>
    </section>
  );
};

export default SideBar;
