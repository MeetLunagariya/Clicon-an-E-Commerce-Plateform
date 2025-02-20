import React from "react";
import Title from "../../product_page/Title";

const Info = () => {
  return (
    <section className="flex flex-col border rounded-sm border-gray-200">
      {/* For Title */}
      <section className="uppercase border-b border-gray-200 pl-6 py-4">
        <Title title={"account info"} />
      </section>

      {/* user profile  */}
      <section>
        {/* top user info  */}
        <section></section>
        {/* bottom user info  */}
        <section></section>
      </section>

      
      <button></button>
    </section>
  );
};

export default Info;
