import React from "react";
import Payment_Index from "../dashboard/payment_option/Payment_Index";
import Info from "../dashboard/account_info/Info";
import BillingAdress from "../dashboard/account_info/BillingAdress";

const Card_Address = () => {
  return (
    <div className="flex flex-col gap-6">
      <Payment_Index />
      <section className="grid grid-cols-2 gap-6">
        <Info />
        <BillingAdress />
      </section>
    </div>
  );
};

export default Card_Address;
