import { useState } from "react";
import Title_Sidebar from "./Title_Sidebar";
import List_Sidebar from "./List_Sidebar";
import RangeSlider from "./Range_Slider";


const list_data = [
  "All Price",
  "Under $20",
  "$25 to $100",
  "$100 to $300",
  "$300 to $500",
  "$500 to $1,000",
  "$1,000 to $10,000",
];
const Price_Range = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="flex flex-col gap-4 w-full py-4 border-b border-[#E4E7E9] ">
      <Title_Sidebar title={"Price Range"} text_color={'#191C1F'}/>
      <label className="sr-only">Example range</label>
      <RangeSlider/>
      <ul className="flex flex-col gap-3 w-full -ml-1">
        {list_data.map((item) => (
          <li key={item}>
            <List_Sidebar
              selected={selected}
              setSelected={setSelected}
              title={item}
              key={item}
              isChecked={selected === item}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Price_Range;
