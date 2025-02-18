import React from "react";
import Title from "../../product_page/Title";

const Additional_Info = () => {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <Title title={"Additional Information"} />
      </div>
      <div className="flex flex-col gap-2 font-sans">
        <label
          htmlFor="additional_info"
          className="text-sm text-[#191C1F] flex gap-1"
        >
          <span>Order Notes</span>

          <span className="text-gray-400">(Optional)</span>
        </label>
        <div className="relative flex">
          <textarea
            className="w-full border rounded-sm px-4 py-2 text-sm text-gray-500 focus:outline-none"
            type="text"
            placeholder="Notes about your order, e.g. special notes for delivery"
            id="additional_info"
           rows={5}
            // Spread other props, like {...register("email")}
          />
        </div>
      </div>
    </section>
  );
};

export default Additional_Info;
