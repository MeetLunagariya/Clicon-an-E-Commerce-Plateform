import React from "react";
import Info from "./Info";
import BillingAdress from "./BillingAdress";
import Orders from "./Orders";

const AccountInfo = () => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 gap-6">
      <Info />
      <BillingAdress />
      <div className="col-span-2 lg:col-span-1">
        <Orders />
      </div>
    </section>
  );
};

export default AccountInfo;
