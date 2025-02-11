import React, { useState } from "react";
import { useSelector } from "react-redux";
import Title from "../product_page/Title";
import { XCircle_Gray } from "../assets/svg";
import Item from "./Item";

const Shopping_Card = () => {
  
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  
  return (
    <section className="col-span-2 row-span-2 border border-gray-100">
      <div className="flex justify-start items-center px-6 py-5">
        <Title title={"Shopping Card"} />
      </div>

      <div>
        <div className="uppercase font-medium bg-gray-50  border-t border-b border-gray-100 text-xs font-sans text-gray-700 px-6 py-2.5 grid grid-cols-6 gap-6">
          <span className="col-span-3">products</span>
          <span>price</span>
          <span>quantity</span>
          <span>sub-total</span>
        </div>
        <div className="p-6 flex flex-col gap-2">
          {items.map((item) => (
            <Item key={item.id} item={item}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shopping_Card;
