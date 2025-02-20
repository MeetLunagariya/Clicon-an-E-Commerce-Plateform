import React from "react";
import { Outlet } from "react-router";
import SideBar from "./SideBar";

const Account = () => {
  return (
    <section className="container py-10">
      <div className="px-4 grid grid-cols-4">
        <SideBar />
        <div className="col-span-3">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Account;
