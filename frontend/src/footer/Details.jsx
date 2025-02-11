import React from "react";
import { Footer_Logo } from "../assets/svg";

const Details = () => {
  return (
    <section className="flex flex-col justify-start gap-6">
      <div>
        <Footer_Logo />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <span className="text-[#77878F] text-sm">Customer Supports:</span>
          <span className="text-white text-lg">(629) 555-0129</span>
        </div>
        <div className="max-w-[248px] font-medium text-[#ADB7BC]">
          <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
        </div>
        <div className="max-w-[248px] font-medium text-white">
          <p>info@kinbo.com</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
