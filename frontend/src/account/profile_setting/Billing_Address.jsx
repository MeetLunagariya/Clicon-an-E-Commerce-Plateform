import React from "react";
import Title from "../../product_page/Title";
import Details from "./Details";

const Billing_Address = () => {
  return (
    <form
      // onSubmit={handleSubmit(submit)}
      className="border border-gray-200 rounded-sm"
    >
      <section className="py-2 px-6 uppercase ">
        <Title title={"Billing Address"} key={"Billing Address"} />
      </section>
      <Details/>
    </form>
  );
};

export default Billing_Address;
