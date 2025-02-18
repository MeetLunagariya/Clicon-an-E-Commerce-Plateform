import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Pinterest,
  Reddit,
  Twitter,
  Youtube,
} from "../assets/svg";
import { English, Mandarin, Russian } from "../assets/img";
import Select from "./Select";
const Top_Nav = () => {
  const [language, setLanguage] = useState('Eng');
  const [currency, setCurrency] = useState('USD');
  const languages = [
    { value: "Eng", title: "English", img: English },
    { value: "Man", title: "Mandarin", img: Mandarin },
    { value: "Rus", title: "Russian", img: Russian },
  ];

  const currencies = [
    { value: "USD", title: "Dollar (USD)" },
    { value: "EUR", title: "Euro (EUR)" },
  ];

  return (
    <nav className="flex font-sans justify-between py-3 px-4 items-center">
      <div className="">
        <p>Welcome to Clicon online eCommerce store. </p>
      </div>
      <div className="flex gap-6">
        <div className="flex gap-3 items-center">
          <div>Follow us: </div>
          <div className="flex gap-3 my-auto">
            <button>
              <Twitter />
            </button>
            <button>
              <Facebook />
            </button>
            <button>
              <Pinterest />
            </button>
            <button>
              <Reddit />
            </button>
            <button>
              <Youtube />
            </button>
            <button>
              <Instagram />
            </button>
          </div>
        </div>
        <div className="border-l border-[#FFFFFF]/50 pl-6 flex gap-2">
        <Select
            options={languages}
            value={language}
            onChange={setLanguage}
          />
        <Select
            options={currencies}
            value={currency}
            onChange={setCurrency}
          />
         
        </div>
      </div>
    </nav>
  );
};

export default Top_Nav;
