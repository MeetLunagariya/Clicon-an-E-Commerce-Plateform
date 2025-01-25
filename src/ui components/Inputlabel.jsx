import { Eye } from "../assets/svg";

const Inputlabel = ({ type, children, id, placeholder }) => {
  return (
    <div className="flex flex-col gap-2 font-sans">
      <label htmlFor={id} className=" text-sm text-[#191C1F] flex justify-between">
        {children}
      </label>

      <div className="w-full relative flex">
        <input
          className="w-full border rounded-sm h-[44px] px-4 text-sm text-gray-500"
          placeholder={placeholder}
          type={type}
          id={id}
        />
        {type === "password" && (
          <div className="absolute pl-[324px] pt-3">
            <Eye/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inputlabel;
