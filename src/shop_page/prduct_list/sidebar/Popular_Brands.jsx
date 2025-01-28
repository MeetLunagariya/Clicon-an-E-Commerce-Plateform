import React from "react";
import Title_Sidebar from "./Title_Sidebar";
import Brands from "./Brands";

const brands = [
  "Apple",
  "Google",
  "Microsoft",
  "Samsung",
  "Dell",
  "HP",
  "Symphony",
  "Xiaomi",
  "Sony",
  "Panasonic",
  "LG",
  "Intel",
  "One Plus",
];

const Popular_Brands = () => {
  return (
    <div className="py-4 border-b border-[#E4E7E9]">
      <Title_Sidebar title={"popular brands"} />
      <div className="grid grid-cols-2 gap-2 mt-3">
        {brands.map((brand) => (
          <>
            <Brands title={brand} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Popular_Brands;
