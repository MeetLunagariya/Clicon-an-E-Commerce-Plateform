import React from "react";
import { MagnifyingGlass } from "../../assets/svg";

const Search = ({ classs = "" }) => {
  let css = "";

  if (classs) {
    css = classs;
  }

  return (
    <div className="relative flex">
      <input
        type="text"
        placeholder="Search for anything..."
        className={
          `rounded-sm focus:outline-none bg-white px-[20px] flex justify-between gap-[8px] ` +
          css
        }
      />
      <button className="absolute right-0 mr-2 text-center my-3">
        <MagnifyingGlass />
      </button>
    </div>
  );
};

export default Search;
