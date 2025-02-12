/* eslint-disable react/prop-types */
import { RightArrow } from "../assets/svg";

const FormButton = ({ title, ...props }) => {
  return (
    <div
      className="bg-[#FA8232] font-semibold rounded-sm my-4 h-[48px] flex justify-center items-center"
      {...props}
    >
      <button className="text-white flex gap-2 uppercase text-sm " {...props} >
      <span>{title}</span>
      <span><RightArrow/></span>
      </button>
    </div>
  );
};

export default FormButton;
