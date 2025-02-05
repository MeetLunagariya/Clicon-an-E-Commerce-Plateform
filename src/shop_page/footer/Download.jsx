import React from "react";

const Download = ({logo,title}) => {
  return (
    <div className="bg-[#303639] flex gap-4 py-4 px-5 items-center rounded-sm">
      <div>{logo}</div>
      <div className="flex flex-col gap-1 text-white">
        <span className="text-sm">Get it now</span>
        <span className="font-semibold">{title}</span>
      </div>
    </div>
  );
};

export default Download;
