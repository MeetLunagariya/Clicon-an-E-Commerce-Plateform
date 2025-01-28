/* eslint-disable react/prop-types */
const List_Sidebar = ({ title, selected, setSelected,isChecked }) => {
  return (
    <>
      <label key={title} className="flex items-center ml-1 cursor-pointer">
        <input
          type="radio"
          name={title}
          value={title}
          className="hidden peer"
          checked={isChecked}
          onChange={() => setSelected(title)}
        />
        <div
          className={`w-5 h-5 rounded-full border-2 border-[#C9CFD2] flex items-center peer-checked:border-[6px] peer-checked:border-[#FA8232] justify-center`}
        ></div>
        <span
          className={` ${
            selected === title ? "text-[#191C1F]" : "text-[#475156]"
          } ml-[8px]`}
        >
          {title}
        </span>
      </label>
    </>
  );
};

export default List_Sidebar;
