import React from "react";

const EditButton = ({ text,...props }) => {
  return (
    <button className="px-6 py-2.5 uppercase text-[#2DA5F3] border-2 border-[#D5EDFD] font-semibold rounded-sm" {...props}>
      {text}
    </button>
  );
};

export default EditButton;
