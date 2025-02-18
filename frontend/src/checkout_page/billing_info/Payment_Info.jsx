import React, { useState } from "react";
import Title from "../../product_page/Title";
import { payment_options } from "./payment_option";
import Inputlabel from "../../ui components/Inputlabel";

const Payment_Info = () => {
  const [selected_paymentMethod, setSelected_paymentMethod] = useState("");
  return (
    <section className="flex rounded-sm border border-gray-200 flex-col">
      <div className="py-4 px-6">
        <Title title={"Payment Option"} />
      </div>
      <ul className="flex py-4 w-full  px-6 border-t border-b  border-gray-200 ">
        {payment_options.map((option) => (
          <>
            <li
              className={`flex-1 flex flex-col justify-center items-center gap-4 min-w-[160px] border-r border-gray-200 last:border-r-0`}
              key={option.id}
            >
              <div className="max-w-8 max-h-8">
                <img src={option.img} alt={option.title} />
              </div>
              <span className="">{option.title}</span>
              <label
                key={option.title}
                className="flex items-center ml-1 cursor-pointer"
              >
                <input
                  type="radio"
                  name={option.title}
                  value={option.title}
                  className="hidden peer"
                  checked={selected_paymentMethod === option.title}
                  onChange={() => setSelected_paymentMethod(option.title)}
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 border-[#C9CFD2] flex items-center peer-checked:border-[6px] peer-checked:border-[#FA8232] justify-center`}
                ></div>
              </label>
            </li>
          </>
        ))}
      </ul>
      <div className="grid grid-cols-2 px-6 py-6 gap-4">
        <div className="col-span-2">
          <Inputlabel
            type={"text"}
            id={"name_on_card"}
            label={"Name on Card"}
          />
        </div>
        <div className="col-span-2">
          <Inputlabel type={"text"} id={"card_number"} label={"Card Number"} />
        </div>
        <div className="">
          <Inputlabel
            type={"date"}
            id={"Expire Date"}
            label={"Expire Date"}
            // placeholder={DD/YY}
          />
        </div>
        <div className="">
          <Inputlabel type={"number"} id={"cvv"} label={"CVC"} />
        </div>
      </div>
    </section>
  );
};

export default Payment_Info;
