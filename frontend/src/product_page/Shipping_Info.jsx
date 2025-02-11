import React from "react";
import Title from "./Title";
import { shipping_data } from "./Data";

const Shipping_Info = () => {
  return (
    <section className="flex flex-col gap-5 ">
      <Title title={"Shipping Information"} />
      <ul className="flex flex-col gap-3">
        {shipping_data.map((data) => (
          <>
            <li className="flex gap-1">
              <span className="text-[#191C1F] font-medium">{data.title}</span>
              <span className="text-[#5F6C72] font-normal">{data.value}</span>
            </li>
          </>
        ))}
      </ul>
    </section>
  );
};

export default Shipping_Info;
