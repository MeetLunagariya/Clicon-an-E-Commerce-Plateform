import React, { useState } from "react";
import Title_Sidebar from "./Title_Sidebar";

const tags_data = [
  "Game",
  "Iphone",
  "TV",
  "Asus Laptop",
  "Macbook",
  "SSD",
  "Graphics Card",
  "Power Bank",
  "Smart TV",
  "Speaker",
  "Tablet",
  "Microwave",
  "Samsung",
];

const Popular_Tags = () => {

  const [selected, setSelected] = useState('');

  return (
    <div className="py-4 w-[312px]">
      <Title_Sidebar title={"popular tag"} />
      <ul className="mt-[18px] flex flex-row justify-start items-start flex-wrap gap-2">
        {tags_data.map((tag) => (
          <>
            <li key={tag}>
              <button className={`border rounded-sm py-[6px] px-3 ${selected === tag && 'border-[#FA8232] text-[#FA8232] bg-[#FFF3EB]'}`} onClick={()=>setSelected(tag)}>{tag}</button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Popular_Tags;
