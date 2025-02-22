import React from "react";
import NameSection from "./NameSection";
import AccountInfo from "./account_info/AccountInfo";

const Dashboard = () => {
  return (
    <section className="flex flex-col gap-6">
      <NameSection />
      <AccountInfo />
      <section></section>
      <section></section>
      <section></section>
    </section>
  );
};

export default Dashboard;
