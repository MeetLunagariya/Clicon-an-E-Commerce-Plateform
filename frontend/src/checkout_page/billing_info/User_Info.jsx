import React, { useState } from "react";
import Title from "../../product_page/Title";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Inputlabel from "../../ui components/Inputlabel";
import Address from "./Address";
import { Check } from "../../assets/svg";

const schema = yup.object({
  firstname: yup
    .string()
    .trim()
    .required("First Name is required")
    .min(4, "Name must be at least 4 characters"),
  lastname: yup
    .string()
    .trim()
    .required("Last Name is required")
    .min(4, "Name must be at least 4 characters"),
  company_name: yup.string(),
  address_1: yup
    .string()
    .trim()
    .required("Address is required")
    .min(4, "Adress must be at least 4 characters"),
  address_2: yup
    .string()
    .trim()
    .required("Address is required")
    .min(4, "Adress must be at least 4 characters"),
  country: yup.string().trim().required("country is required"),
  city: yup.string().trim().required("City is required"),
  state: yup.string().trim().required("State is required"),
  zip: yup
    .number()
    .required("Zip Code is required")
    .min(4, "Zip Code must be at least 4 characters")
    .max(6, "Zip Code must be at least 6 characters"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone_number: yup.number().required("Email is required"),
  isDifferentAddress: yup.boolean(),
});
const User_Info = () => {
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const isDifferentAddress = watch("isDifferentAddress", false);
  // console.log(watch('country'))
  // console.log(watch('state'))
  // console.log(watch("isDifferentAddress"));

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
        </span>
        <span className="">
          <Inputlabel
            type={"name"}
            id={"lastname"}
            placeholder={"Last Name"}
            label={"Last Name"}
            {...register("lastname")}
          />
        </span>
        <span className="col-span-2">
          <Inputlabel
            type={"text"}
            id={"company_name"}
            label={"Company Name"}
            {...register("company_name")}
          />
        </span>

        {/* Address Area  */}
        <Address register={register} setValue={setValue} />

        
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
