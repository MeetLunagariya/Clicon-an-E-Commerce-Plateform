import React from "react";
import User_Info from "./User_Info";
import Payment_Info from "./Payment_Info";
import Additional_Info from "./Additional_Info";

const Billing_Info = () => {
  return (
    <section className="col-span-3 ">
      <form  className="flex flex-col gap-10">
        <User_Info />
        <Payment_Info />
        <Additional_Info />
      </form>
    </section>
  );
};

export default Billing_Info;
