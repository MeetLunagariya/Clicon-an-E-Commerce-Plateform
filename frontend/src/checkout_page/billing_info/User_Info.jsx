import React from "react";
import Title from "../../product_page/Title";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  username: yup
    .string()
    .trim()
    .required("Name is required")
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
    .trim()
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
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <section className="flex flex-col gap-6 grid-cols-4">
      <div className="col-span-4">
        <Title title={"Billing Information"} />
      </div>
      <div></div>
    </section>
  );
};

export default User_Info;
