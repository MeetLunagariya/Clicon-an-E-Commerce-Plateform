import EyeIcon from "../assets/svg/eye.svg?react";

const Inputlabel = ({ type, children, id }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className=" text-sm flex justify-between">
        {children}
      </label>

      <div className="w-full relative flex">
        <input
          className="w-full border rounded-sm h-[44px]"
          type={type}
          id={id}
        />
        {type === "password" && (
          <div className="absolute pl-[324px] pt-3">
            <EyeIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default Inputlabel;
