/* eslint-disable react/prop-types */
import React from "react";

const FormButton = ({children}) => {
  return (
    <div className="bg-[#FA8232] font-semibold rounded-sm my-4 h-[48px] flex justify-center items-center">
      <button className="text-white flex gap-2 uppercase text-sm ">{children}</button>
    </div>
  );
};

export default FormButton;
