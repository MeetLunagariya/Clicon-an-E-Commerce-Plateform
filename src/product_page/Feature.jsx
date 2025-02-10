import React from "react";
import Title from "./Title";
import { feature_data } from "./Data";

const Feature = () => {
  return (
    <section className="flex flex-col gap-4 border-r border-[#E4E7E9]">
      <Title title={"Feature"} />
      <ul className="flex flex-col gap-3 font-normal">
        {feature_data.map((feature) => (
          <>
            <li key={feature.title} className="flex gap-2">
              <span>{<feature.icon/>}</span>
              <span className="text-[#191C1F]">{feature.title}</span>
            </li>
          </>
        ))}
      </ul>
    </section>
  );
};

export default Feature;
