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

const Popular_Tags = ({ border, selected_bg, text_color, selected_text_color, selected_border }) => {
  const [selected, setSelected] = useState("");

  return (
    <div className=" w-[312px]">
      <Title_Sidebar title={"popular tag"} text_color={text_color} />
      <ul className="mt-[18px] flex flex-row justify-start items-start flex-wrap gap-2">
        {tags_data.map((tag) => (
          <>
            <li key={tag}>
              <button
                className={`border rounded-sm py-[6px] px-3 text-[${text_color}]  border-[${border}] ${
                  selected === tag &&
                  `border-[${selected_border}] text-[${selected_text_color}] bg-[${selected_bg}]`
                }`}
                onClick={() => setSelected(tag)}
              >
                {tag}
              </button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Popular_Tags;
