import React from "react";
import Title from "../product_page/Title";

const Coupon_Code = () => {
  return (
    <section className=" border border-gray-100 rounded-sm self-start">
      <div className="flex justify-start items-center py-5 px-6 border-b border-gray-100">
        <Title title={"Coupon Code"} />
      </div>
      <div className="px-6 my-5 flex flex-col gap-3">
        <input
          type="email"
          className="border w-full flex-1 border-gray-100 text-gray-500 py-3 pl-3 "
          placeholder="Email Address"
        />
        <button className="uppercase self-start flex-none text-white bg-[#2DA5F3] rounded-sm py-3 px-5 font-bold">
          Apply coupon
        </button>
      </div>
    </section>
  );
};

export default Coupon_Code;
