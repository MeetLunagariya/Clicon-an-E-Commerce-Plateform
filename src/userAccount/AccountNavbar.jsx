import React, { useState } from "react";

const AccountNavbar = () => {
  const [isActive, setIsActive] = useState("SignIn");

  const handleSetActive = (event) => {
    setIsActive(event);
  };

  return (
    <div className=" flex  justify-between items-center h-16 bg-white mb-[10px] border-b-2 border-gray-100">
      <button
        className={`font-sans text-xl w-full text-gray-500 font-semibold mx-auto py-[17px] ${
          isActive === "SignIn" &&
          " border-b-[4px] border-[#FA8232] text-gray-900"
        }`}
        onClick={() => handleSetActive("SignIn")}
      >
        Sign In
      </button>
      <button
        className={`font-sans text-xl w-full text-gray-500 font-semibold mx-auto py-[17px] ${
          isActive === "SignUp" &&
          "border-b-[4px] border-[#FA8232] text-gray-900"
        }`}
        onClick={() => handleSetActive("SignUp")}
      >
        Sign Up
      </button>
      
    </div>
  );
};

export default AccountNavbar;
