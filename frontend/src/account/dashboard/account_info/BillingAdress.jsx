import React from "react";
import EditButton from "../EditButton";
import Title from "../../../product_page/Title";

const BillingAdress = () => {
  return (
    <section className="flex flex-col border rounded-sm border-gray-200">
      {/* For Title */}
      <section className="uppercase border-b border-gray-200 pl-6 py-4">
        <Title title={"billing address"} />
      </section>
      <section className="pl-4 mt-4 flex flex-col gap-2 text-sm">
        <div className="text-gray-900 font-medium">Kevin Gilbert</div>
        <div className="text-gray-600">
          East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat
          No. 5D, Dhaka - 1200, Bangladesh
        </div>
        <div className="flex gap-1">
          <span className="text-gray-900">Email:</span>
          <span className="text-gray-600">kevin.gilbert@gmail.com</span>
        </div>
        <div className="flex gap-1">
          <span className="text-gray-900">Phone Number:</span>
          <span className="text-gray-600">+1-202-555-0118</span>
        </div>
      </section>
      <section className="my-5 pl-4">
        <EditButton text={"edit address"} />
      </section>
    </section>
  );
};

export default BillingAdress;
