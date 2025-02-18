import React from "react";
import Billing_Info from "./billing_info/Billing_Info";
import Order_Summary from "./order_summary/Order_Summary";

const Checkout = () => {
  return (
    <div className="container ">
      <div className="grid grid-cols-4 px-3 py-10 gap-4" >
        <Billing_Info />
        <Order_Summary />
      </div>
    </div>
  );
};

export default Checkout;
