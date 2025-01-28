import { useState } from "react";
import Title_Sidebar from "./Title_Sidebar";
import List_Sidebar from "./List_Sidebar";

const list_data = [
  "Electronics Devices",
  "Computer & Laptop",
  "Computer Accessories",
  "SmartPhone",
  "Headphone",
  "Mobile Accessories",
  "Gaming Console",
  "Camera & Photo",
  "TV & Homes Appliances",
  "Watchs & Accessories",
  "GPS & Navigation",
  "Warable Technology",
];

const Category = () => {
  const [selected_price, setSelected_price] = useState("");

  return (
    <div className="flex flex-col gap-4 w-full pb-4 border-b border-[#E4E7E9]">
      <Title_Sidebar title={"Category"} />
      <ul className="flex flex-col gap-3 w-full -ml-1">
        {list_data.map((item) => (
          <li key={item}>
            <List_Sidebar
              selected={selected_price}
              setSelected={setSelected_price}
              title={item}
              key={item}
              isChecked={selected_price === item}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
