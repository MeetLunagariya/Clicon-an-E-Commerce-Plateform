import React from "react";

const Images = ({ currentImg, setCurrentImg, img }) => {
  return (
    <li
      className={`h-[96px] w-[96px] rounded-sm border border-[#E4E7E9] ${
        currentImg === img.id && "border-2 border-[#FA8232]"
      }`}
      key={img}
      onClick={() => setCurrentImg(img.id)}
    >
      <img src={img.img} alt="" className="object-fill " />
    </li>
  );
};

export default Images;
