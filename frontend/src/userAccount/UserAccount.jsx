/* eslint-disable react/prop-types */
import { Outlet, useNavigate } from "react-router";
import AccountNavbar from "./AccountNavbar";
import { useAuth } from "../Store/context/AuthContext";
import { useEffect } from "react";

const UserAccount = ({ isForget }) => {
  const navigate = useNavigate();
  const { setisLoggedIn } = useAuth();

  useEffect(() => {
    const userItem = localStorage.getItem("user");
    // console.log("userItem", userItem);
    if (userItem) {
      setisLoggedIn(true);
      navigate("/home");
    }
  }, []);

  return (
    <main className="flex justify-center text-xl items-center my-20">
      <div className="rounded-md border border-gray-200 w-[424px] shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)] ">
        {!isForget && <AccountNavbar />}

        <div className="pt-2 pb-[30px]">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default UserAccount;
