import React from "react";
import Top_Nav from "./Top_Nav";
import Middle_Nav from "./Middle_Nav";
import Bottom_Nav from "./Bottom_Nav";
import Routes_Nav from "./Routes_Nav";

const Navigation = () => {
  return (
    <div className="">
      <div className="bg-[#1B6392]  text-[#FFFFFF] ">
        <div className="shadow-[0px_1px_0px_0px_rgba(128,_128,_128,_0.5)] ">
          <Top_Nav />
        </div>
        <Middle_Nav />
      </div>
      <Bottom_Nav />
      <Routes_Nav />
    </div>
  );
};

export default Navigation;
