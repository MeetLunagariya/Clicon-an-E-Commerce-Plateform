import React from "react";

const filters = ["Electronics Devices", "5 Star Rating"];

const Filter_Bar = () => {
  return (
    <div className="container bg-[#F2F4F5] flex justify-between py-3 px-6 rounded-sm">
      <div className="flex gap-4">
        <span className="text-[#5F6C72]">Active Filters:</span>
        <span>
          <ul className="flex gap-4">
            {filters.map((filter) => (
              <>
                <li className="flex gap-2" key={filter}>
                  <span className="text-[#191C1F]">{filter}</span>
                  <span className="text-[#929FA5] font-semibold">x</span>
                </li>
              </>
            ))}
          </ul>
        </span>
      </div>
      <div className="flex gap-2">
        <span className="text-[#141414]">65,867</span>
        <span className="text-[#929FA5]">Results found.</span>
      </div>
    </div>
  );
};

export default Filter_Bar;
