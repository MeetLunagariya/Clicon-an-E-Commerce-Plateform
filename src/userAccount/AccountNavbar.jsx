import { useState } from "react";
import {  NavLink } from "react-router";

const AccountNavbar = () => {
  const [isActive, setIsActive] = useState("SignIn");

  const handleSetActive = (event) => {
    setIsActive(event);
  };

  return (
    <>
      <nav>
        <ul className="flex justify-between items-center h-16 bg-white mb-[10px] border-b-2 border-gray-100">
          <li
            className={`font-sans text-xl w-full text-gray-500 font-semibold mx-auto py-[17px] ${
              isActive === "SignIn" &&
              " border-b-[4px] border-[#FA8232] text-gray-900"
            }`}
          >
            <NavLink to="/signIn" onClick={() => handleSetActive("SignIn")}>
              <div className="text-center">Sign In</div>
            </NavLink>
          </li>
          <li
            className={`font-sans text-xl w-full text-gray-500 font-semibold mx-auto py-[17px] ${
              isActive === "SignUp" &&
              "border-b-[4px] border-[#FA8232] text-gray-900"
            }`}
          >
            <NavLink to="/signUp" onClick={() => handleSetActive("SignUp")}>
              <div className="text-center">Sign Up</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AccountNavbar;
