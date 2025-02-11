import React, { useState } from "react";
import { ShoppingCartSimple_advertise } from "../assets/svg";

const MAX_ITEM_COUNT = 5;

const FormSection = () => {
  const [itemCount, setItemCount] = useState(1);

  return (
    <section className="my-5">
      <form>
        <div className="grid grid-cols-4 gap-4">
          <div className="gap-2 flex flex-col col-span-2">
            <label htmlFor="color">Color</label>
            <ul className="flex gap-3">
              <li key={"#B1B5B8"}>
                <div className="rounded-full border-2 border-[#FA8232] p-1">
                  <div className="min-w-8 min-h-8 bg-[#B1B5B8] rounded-full"></div>
                </div>
              </li>
              <li key={"#E0E1E1"}>
                <div className="p-1 ">
                  <div className="min-w-8 min-h-8 bg-[#E0E1E1] rounded-full"></div>
                </div>
              </li>
            </ul>
          </div>
          <div className="gap-2 flex flex-col col-span-2">
            <label htmlFor="size">Size</label>
            <select
              name="size"
              id="size"
              className="border border-[#E4E7E9] text-[#475156] py-2 px-2"
            >
              <option value="14">14-inch Liquid Retina XDR display</option>
              <option value="15.6">15.6-inch Liquid Retina XDR display</option>
              <option value="16">17-inch Liquid Retina XDR display</option>
            </select>
          </div>
          <div className="gap-2 flex flex-col col-span-2">
            {" "}
            <label htmlFor="memory">Memory</label>
            <select
              name="memory"
              id="memory"
              className="border border-[#E4E7E9] text-[#475156] py-2 px-2"
            >
              <option value="16">16GB unified memory</option>
              <option value="32">32GB unified memory</option>
            </select>
          </div>
          <div className="gap-2 flex flex-col col-span-2">
            {" "}
            <label htmlFor="Storage">Storage</label>
            <select
              name="Storage"
              id="Storage"
              className="border border-[#E4E7E9] text-[#475156] py-2 px-2"
            >
              <option value="1tv">1TV SSD Storage</option>
              <option value="2tv">2TV SSD Storage</option>
            </select>
          </div>

          {/* Buttons  */}
          <div className="flex justify-evenly border border-[#E4E7E9] py-3 rounded-sm mt-3">
            <button
              type="button"
              className="text-[#191C1F] text-xl my-auto"
              disabled={itemCount === 1}
              onClick={() => setItemCount(itemCount - 1)}
            >
              -
            </button>
            <span className="text-[#475156] my-auto text-xl">{itemCount}</span>
            <button
              type="button"
              className="text-[#191C1F] text-xl my-auto"
              disabled={itemCount === MAX_ITEM_COUNT}
              onClick={() => setItemCount(itemCount + 1)}
            >
              +
            </button>
          </div>
          <button
            className="col-span-2 flex uppercase bg-[#FA8232] justify-center items-center mt-3 rounded-sm gap-3"
            type="button"
          >
            <span className="text-white font-medium text-lg">add to cart</span>
            <span>
              <ShoppingCartSimple_advertise />
            </span>
          </button>
          <button
            type="button"
            className="uppercase text-[#FA8232] border-2 border-[#FA8232] text-center mt-3 font-bold rounded-sm"
          >
            buy now
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormSection;
