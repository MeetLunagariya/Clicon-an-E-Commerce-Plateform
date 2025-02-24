import React from "react";
import { Outlet } from "react-router";
import SideBar from "./SideBar";
import Card_Form from "./dashboard/payment_option/Card_Form";
import { useSelector } from "react-redux";

const Account = () => {
  const { showApplicationForm } = useSelector((state) => state.card);
  // console.log("showApplicationForm", showApplicationForm);
  return (
    <section className="container py-10">
      <div className="px-4 grid grid-cols-4">
        <SideBar />
        <div className="col-span-3">
          <Outlet />
        </div>
      </div>
      {showApplicationForm && <Card_Form />}
    </section>
  );
};

export default Account;
