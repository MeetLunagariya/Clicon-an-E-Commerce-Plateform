/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import User_Info from "./User_Info";
import Payment_Info from "./Payment_Info";
import Additional_Info from "./Additional_Info";

const Billing_Info = ({ register, errors, setValue,watch }) => {
  return (
    <section className="col-span-3 flex flex-col gap-10">
      <User_Info register={register} errors={errors} setValue={setValue} watch={watch}/>
      <Payment_Info />
      <Additional_Info />
    </section>
  );
};

export default Billing_Info;
