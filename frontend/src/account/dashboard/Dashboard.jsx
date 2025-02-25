import React from "react";
import NameSection from "./NameSection";
import AccountInfo from "./account_info/AccountInfo";
import Payment_Index from "./payment_option/Payment_Index";
import Recent_Index from "./recent_order/Recent_Index";

const Dashboard = () => {
  return (
    <section className="flex flex-col gap-6">
      <NameSection />
      <AccountInfo />
      <Payment_Index />
      <Recent_Index />
      <section></section>
    </section>
  );
};

export default Dashboard;
