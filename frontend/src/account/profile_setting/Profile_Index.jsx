import React from "react";
import Account_Setting from "./Account_Setting";
import Billing_Address from "./Billing_Address";
import Shipping_Address from "./Shipping_Address";
import Change_Password from "./Change_Password";


const Profile_Index = () => {

  return (
    <section className="flex flex-col gap-6">
      <Account_Setting/>
      <section className="grid grid-cols-2 gap-4">
        <Billing_Address/>
        <Shipping_Address/>
      </section>
      <Change_Password/>
    </section>
  );
};

export default Profile_Index;
