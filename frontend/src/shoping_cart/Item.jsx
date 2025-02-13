import React, { useRef, useState } from "react";
import { XCircle_Gray } from "../assets/svg";
import { removeFromCart, addToCart, removeItemQuantity } from "../Store/cartSlice";
import { useDispatch } from "react-redux";

const MAX_ITEM_COUNT = 5;

const Item = ({ item }) => {
 
  const dispatch = useDispatch();
  return (
    <>
      <div className="grid grid-cols-6 gap-6 py-1">
        {/* about product */}
        <div className="col-span-3 flex items-center gap-3">
          <span
            className="hover:cursor-pointer transition-colors duration-300 text-[#929FA5] hover:text-[#EE5858]"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            <XCircle_Gray  />
          </span>

          <div className="h-full w-[72px]">
            <img src={item.image} alt="" />
          </div>
          <span className="text-gray-900 text-sm">{item.description}</span>
        </div>
        {/* product price  */}
        <div className="flex items-center gap-1">
          {item.badge_id === 4 ? (
            <>
              <span className="line-through text-gray-400 text-sm">
                ${item.price}
              </span>
              <span className="text-gray-700 text-sm font-medium">
                ${item.disc_price}
              </span>
            </>
          ) : (
            <span className="text-gray-700 text-sm font-medium">
              ${item.price}
            </span>
          )}
        </div>
        {/* Quantity */}
        <div className="flex justify-between border border-[#E4E7E9] py-2 rounded-sm px-5 ">
          <button
            type="button"
            className="text-[#191C1F] text-xl my-auto disabled:text-gray-400 min-w-[11px]"
            disabled={item.quantity === 1}
            onClick={() => dispatch(removeItemQuantity(item.id))}
          >
            -
          </button>
          <span className="text-[#475156] my-auto text-xl">{item.quantity}</span>
          <button
            type="button"
            className="text-[#191C1F] text-xl my-auto disabled:text-gray-400"
            disabled={item.quantity === MAX_ITEM_COUNT}
            onClick={() => dispatch(addToCart(item))}
          >
            +
          </button>
        </div>
        <span className="flex items-center">${item.quantity * (item.badge_id === 4 ? item.disc_price : item.price)}</span>
      </div>
    </>
  );
};

export default Item;
