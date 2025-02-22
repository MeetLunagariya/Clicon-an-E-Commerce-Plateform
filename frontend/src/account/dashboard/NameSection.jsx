import React from "react";

const NameSection = () => {
  return (
    <section className="flex flex-col gap-3">
      <div className="text-gray-900 font-medium text-lg">Hello, Kevin</div>
      <div className="text-sm max-w-[423px] text-gray-600">
        From your account dashboard. you can easily check & view your{" "}
        <button className="text-[#2DA5F3]">Recent Orders</button>, manage your{" "}
        <button className="text-[#2DA5F3]">Shipping and Billing Addresses</button> and edit your
        <button className="text-[#2DA5F3]">Password</button> and <button className="text-[#2DA5F3]">Account Details.</button>
      </div>
    </section>
  );
};

export default NameSection;
