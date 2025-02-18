/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useState, forwardRef } from "react";
import { Eye, HideEye } from "../assets/svg";

const Inputlabel = forwardRef(
  ({ type, id, placeholder, label, isOptional , ...props }, ref) => {
    const [isPassVisible, setIsPassVisible] = useState(false);

    return (
      <div className="flex flex-col gap-2 font-sans">
        <label htmlFor={id} className="text-sm text-[#191C1F] flex gap-1">
          <span>{label}</span>
          {isOptional && (
            <>
              <span className="text-gray-400">(Optional)</span>
            </>
          )}
        </label>
        <div className="relative flex">
          <input
            className="w-full border rounded-sm h-[44px] px-4 text-sm text-gray-500 focus:outline-none"
            type={isPassVisible && type === "password" ? "text" : type}
            placeholder={placeholder}
            id={id}
            ref={ref} // Forward the ref to this input
            {...props} // Spread other props, like {...register("email")}
          />
          {type === "password" && (
            <button
              type="button"
              className="absolute right-0 top-0 mt-3 mr-2"
              onClick={() => setIsPassVisible(!isPassVisible)}
            >
              {isPassVisible ? <HideEye /> : <Eye />}
            </button>
          )}
        </div>
      </div>
    );
  }
);

export default Inputlabel;
