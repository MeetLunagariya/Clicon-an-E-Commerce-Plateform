import React from "react";

const WishList = ({icon,title}) => {
  return (
    <div className="flex gap-1.5">
      <span className="my-auto">{icon}</span>
      <span className="text-[#475156] my-auto">{title}</span>
    </div>
  );
};

export default WishList;
