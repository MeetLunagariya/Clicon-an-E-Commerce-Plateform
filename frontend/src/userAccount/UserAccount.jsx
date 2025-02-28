/* eslint-disable react/prop-types */
import { Outlet } from "react-router";
import AccountNavbar from "./AccountNavbar";

const UserAccount = ({ isForget }) => {
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
