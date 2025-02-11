import React, { useState } from "react";
import { categories } from "./data";
import { ArrowRight_Category_Footer } from "../assets/svg";
import Title_Sidebar from "../shop_page/prduct_list/sidebar/Title_Sidebar";

const Category = () => {
  const [isSelecterd, setIsSelected] = useState(3);

  const handleSelected = (index) => {
    setIsSelected(index);
  };

  return (
    <section className="flex flex-col gap-3 w-[180px]">
      <Title_Sidebar text_color={"#FFFFFF"} title={"Top Category"} />
      <div className="flex flex-col gap-1.5">
        <ul className="flex flex-col gap-1.5">
          {categories.map((category) => (
            <li
              key={category.id}
              className={`${
                isSelecterd === category.id && "text-white"
              } hover:cursor-pointer flex gap-2 py-1.5`}
              onClick={() => handleSelected(category.id)}
            >
              {isSelecterd === category.id && (
                <div className="border-2 border-yellow-500 min-w-6 my-auto"></div>
              )}
              <div>{category.item}</div>
            </li>
          ))}
        </ul>
        <div className="flex gap-2  py-1.5">
          <span className="text-sm text-yellow-500">Browse All Product</span>
          <span>
            <ArrowRight_Category_Footer />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Category;
