/* eslint-disable react/prop-types */
import { RightArrow } from "../assets/svg";

const FormButton = ({ title, ...props }) => {
  return (
    <button
      className="bg-[#FA8232] w-full font-semibold rounded-sm my-4 h-[48px] flex justify-center items-center"
      {...props}
    >
      <div className="text-white flex gap-2 uppercase text-sm "  >
      <span>{title}</span>
      <span><RightArrow/></span>
      </div>
    </button>
  );
};

export default FormButton;
