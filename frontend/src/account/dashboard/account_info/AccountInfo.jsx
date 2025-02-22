import React from "react";
import Info from "./Info";
import BillingAdress from "./BillingAdress";
import Orders from "./Orders";

const AccountInfo = () => {
  return (
    <section className="grid grid-cols-3 gap-6">
      <Info />
      <BillingAdress />
      <Orders />
    </section>
  );
};

export default AccountInfo;
