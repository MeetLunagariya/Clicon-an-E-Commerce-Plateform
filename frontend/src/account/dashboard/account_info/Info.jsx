import React from "react";
import Title from "../../../product_page/Title";
import { profile } from "../../../assets/img";
import EditButton from "../EditButton";

const Info = () => {
  return (
    <section className="flex flex-col border rounded-sm border-gray-200">
      {/* For Title */}
      <section className="uppercase border-b border-gray-200 pl-6 py-4">
        <Title title={"account info"} />
      </section>

      {/* user profile  */}
      <section className="pl-6 pt-6 flex flex-col gap-5">
        {/* top user info  */}
        <section className="flex gap-4">
          <div className="max-w-[48px] max-h-[48px]">
            <img src={profile} alt="" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-gray-900 text-lg">
              Kevin Gilbert
            </span>
            <span className="text-sm text-gray-600">
              Dhaka-1207, Bangladesh
            </span>
          </div>
        </section>
        {/* bottom user info  */}
        <section className="text-sm flex flex-col gap-2">
          <div className="flex gap-1">
            <span className="text-gray-900">Email:</span>
            <span className="text-gray-600">kevin.gilbert@gmail.com</span>
          </div>
          <div className="flex gap-1">
            <span className="text-gray-900">Sec Email:</span>
            <span className="text-gray-600">kevin12345@gmail.com</span>
          </div>
          <div className="flex gap-1">
            <span className="text-gray-900">Phone Number:</span>
            <span className="text-gray-600">+1-202-555-0118</span>
          </div>
        </section>
      </section>

      <section className="my-5 pl-4">
        <EditButton text={"edit account"} />
      </section>
    </section>
  );
};

export default Info;
