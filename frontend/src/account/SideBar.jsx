import React, { useState } from "react";
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
import { useNavigate } from "react-router";

const data = [
  { title: "Dashboard", icon: <Stack_2 />, to: "./" },
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
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  return (
    <section className="shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)] mr-10 rounded-sm border py-4 self-start">
      <ul className="flex flex-col gap-0.5">
        {data.map((item) => (
          <li
            key={item.title}
            className={`flex gap-2 text-sm font-medium px-5 py-3 hover:cursor-pointer ${
              selectedItem === item.title
                ? "text-white bg-[#FA8232]"
                : "text-[#5F6C72] hover:text-white hover:bg-[#FA8232]"
            }`}
            onClick={() => {
              setSelectedItem(item.title);
              navigate(`${item.to}`);
            }}
          >
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SideBar;
