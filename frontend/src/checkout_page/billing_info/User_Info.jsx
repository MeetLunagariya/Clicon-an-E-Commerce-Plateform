import React, { useState } from "react";
import Title from "../../product_page/Title";

import Inputlabel from "../../ui components/Inputlabel";
import Address from "./Address";
import { Check } from "../../assets/svg";

const User_Info = ({ register, errors, setValue, watch }) => {
  const isDifferentAddress = watch("isDifferentAddress", false);

  return (
    <section className="flex flex-col gap-6 ">
      <div className="">
        <Title title={"Billing Information"} />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {/* Name Area  */}
        <span className="">
          <Inputlabel
            type={"name"}
            id={"firstname"}
            placeholder={"First Name"}
            label={"First Name"}
            {...register("firstname")}
          />
          {errors.firstname && (
            <p className="text-sm text-red-500">{errors.firstname.message}</p>
          )}
        </span>
        <span className="">
          <Inputlabel
            type={"name"}
            id={"lastname"}
            placeholder={"Last Name"}
            label={"Last Name"}
            {...register("lastname")}
          />
          {errors.lastname && (
            <p className="text-sm text-red-500">{errors.lastname.message}</p>
          )}
        </span>
        <span className="col-span-2">
          <Inputlabel
            type={"text"}
            id={"company_name"}
            label={"Company Name"}
            isOptional={true}
            {...register("company_name")}
          />
        </span>
        {/* Address Area  */}
        <Address register={register} setValue={setValue} errors={errors} />
        <span className="col-span-2">
          <Inputlabel
            type={"email"}
            id={"email"}
            label={"Email"}
            {...register("email")}
          />
        </span>
        <span className="col-span-2">
          <Inputlabel
            type={"number"}
            id={"phone_number"}
            label={"Phone Number"}
            
            {...register("phone_number")}
          />
        </span>

        <div className="flex gap-2 col-span-4">
          <div className="inline-flex items-center mb-auto">
            <label className="flex items-center cursor-pointer relative">
              <input
                type="checkbox"
                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm shadow hover:shadow-md border border-slate-300 checked:bg-[#FA8232] checked:border-[#FA8232]"
                id="check"
                {...register("isDifferentAddress")}
              />
              <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <Check />
              </span>
            </label>
          </div>
          <div className="text-sm font-sans text-[#475156]">
            Ship into different address
          </div>
        </div>
        {isDifferentAddress === true && (
          <>
            <span className="col-span-4">
              <Inputlabel
                type={"text"}
                id={"address_2"}
                label={"Address 2"}
                {...register("address_2")}
              />
            </span>
          </>
        )}
      </div>
    </section>
  );
};

export default User_Info;
