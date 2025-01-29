import React from "react";
import {
  Facebook,
  Instagram,
  Pinterest,
  Reddit,
  Twitter,
  Youtube,
} from "../../assets/svg";
const Top_Nav = () => {
  return (
    <nav className="flex font-sans justify-between py-3">
      <div className="">
        <p>Welcome to Clicon online eCommerce store. </p>
      </div>
      <div className="flex gap-6">
        <div className="flex gap-3">
          <div>Follow us: </div>
          <div className="flex gap-3 my-auto">
            <span>
              <Twitter />
            </span>
            <span>
              <Facebook />
            </span>
            <span>
              <Pinterest />
            </span>
            <span>
              <Reddit />
            </span>
            <span>
              <Youtube />
            </span>
            <span>
              <Instagram />
            </span>
          </div>
        </div>
        <div className="border-l border-[#FFFFFF]/50 pl-6 flex gap-6">
          <select name="lang" className="bg-[#1B6392]">
            <option value="Eng">Eng</option>
          </select>
          <select name="currency" className="bg-[#1B6392]">
            <option value="currency">USD</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Top_Nav;
