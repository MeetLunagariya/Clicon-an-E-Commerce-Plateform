import React from "react";
import { description_data } from "./Data";
import Title from "./Title";

const Description = () => {
  return (
    <section className="col-span-2 flex flex-col gap-3">
      <Title title={'Discription'}/>
      <ul className="text-left flex flex-col text-[#5F6C72] text-sm font-normal font-sans gap-3 mr-10 leading-5 text-justify">
        {description_data.map((data,index) => (
          <>
            <li key={index}>{data}</li>
          </>
        ))}
      </ul>
    </section>
  );
};

export default Description;
