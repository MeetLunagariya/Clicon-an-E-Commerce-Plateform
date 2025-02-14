import React from "react";
import Title from "../../product_page/Title";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Inputlabel from "../../ui components/Inputlabel";
import { CountrySelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

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
    // .trim()
    .required("Zip Code is required")
    .min(4, "Zip Code must be at least 4 characters"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone_number: yup.number().required("Email is required"),
});
const User_Info = () => {
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  console.log(watch("country"));

  return (
    <section className="flex flex-col gap-6 ">
      <div className="">
        <Title title={"Billing Information"} />
      </div>
      <div className="grid grid-cols-4 gap-4">
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
        <span className="col-span-4">
          <Inputlabel
            type={"text"}
            id={"address_1"}
            label={"Address"}
            {...register("address_1")}
          />
        </span>
        <span>
          <CountrySelect
            containerClassName="[border:none] [outline:none] [box-shadow:none] !important"
            inputClassName="!border-none !outline-none px-3 py-2 rounded-md "
            onChange={(selected) => setValue("country", selected?.name)}
            onTextChange={(_txt) => console.log(_txt)}
            placeHolder="Select Country"
          />
        </span>
      </div>
    </section>
  );
};

export default User_Info;
