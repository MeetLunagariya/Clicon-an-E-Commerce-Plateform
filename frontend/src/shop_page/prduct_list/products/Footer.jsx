import React from "react";
import { ArrowLeft_footer, ArrowRight_footer } from "../../../assets/svg";
import { products } from "./productData";

const Footer = ({
  handlePageChange,
  currentPage,
  PAGE_SIZE,
  handleNext,
  handlePrevious,
  start_end,
}) => {
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / PAGE_SIZE);

  return (
    <div className="w-full flex justify-center items-center gap-5">
      <button
        className="flex justify-center items-center h-[48px] w-[48px] rounded-full border border-[#FA8232] disabled:cursor-not-allowed"
        onClick={handlePrevious}
        disabled={start_end.start === 0}
      >
        <ArrowLeft_footer />
      </button>
      <div className="flex gap-2">
        {[...Array(totalPages).keys()].map((item) => (
          <>
            <button
              className={`h-[48px] w-[48px] flex justify-center items-center rounded-full border border-[#E4E7E9] ${
                currentPage === item &&
                "border-[#FA8232] bg-[#FA8232] text-white"
              } font-semibold`}
              key={item}
              onClick={() => handlePageChange(item)}
            >
              {(item >= 9 && "0") + item + 1}
            </button>
          </>
        ))}
      </div>
      <button
        className={`flex justify-center items-center h-[48px] w-[48px] rounded-full border border-[#FA8232] disabled:cursor-not-allowed`}
        onClick={handleNext}
        disabled={start_end.end === totalPages * PAGE_SIZE}
      >
        <ArrowRight_footer />
      </button>
    </div>
  );
};

export default Footer;
