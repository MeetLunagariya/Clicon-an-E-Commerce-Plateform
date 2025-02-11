import React from "react";
import Top_Nav from "./Top_Nav";
import Middle_Nav from "./Middle_Nav";
import Bottom_Nav from "./Bottom_Nav";
import Routes_Nav from "./Routes_Nav";

const Navigation = () => {
  return (
    <>
      <div className="bg-[#1B6392]  text-[#FFFFFF] ">
        <div className="shadow-[0px_1px_0px_0px_rgba(128,_128,_128,_0.5)]">
          <div className="container mx-auto ">
            <Top_Nav />
          </div>
        </div>
        <div className="container mx-auto ">
          <Middle_Nav />
        </div>
      </div>
      <div className="container mx-auto">
        <Bottom_Nav />
      </div>
      <div className="bg-[#F2F4F5]">
        <div className="container mx-auto">
          <Routes_Nav />
        </div>
      </div>
    </>
  );
};

export default Navigation;
