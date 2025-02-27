import React from "react";
import Title from "../../product_page/Title";
import Inputlabel from "../../ui components/Inputlabel";

const Change_Password = () => {
  return (
    <form className="border border-gray-200 rounded-sm">
      <section className="py-2 px-6 uppercase ">
        <Title title={"Change Password"} key={"Change Password"} />
      </section>
      <section className="px-6 py-3 border-t border-gray-200 flex flex-col gap-2">
        <Inputlabel
          label={"Current Password"}
          id={"current_password"}
          type={"password"}
          key={"current_password"}
          // placeholder={"Enter your current password"}
        />
        <Inputlabel
          label={"New Password"}
          id={"new_password"}
          type={"password"}
          placeholder={"8+ Characters"} 
          key={"new_password"}
        />
        <Inputlabel
          label={"Confirm Password"}
          id={"confirm_password"}
          type={"password"}
          key={"confirm_password"}
        />
        <button className="bg-[#FA8232] text-white px-6 py-3 rounded-sm uppercase text-sm font-medium self-start my-3">
          Change Password
        </button>
      </section>
    </form>
  );
};

export default Change_Password;
