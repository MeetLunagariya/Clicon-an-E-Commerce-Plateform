/* eslint-disable react/prop-types */
import { Rating } from "@mui/material";
import { useState } from "react";
import { Eye2, HeartBlack, ShoppingCartSimple2 } from "../../../assets/svg";

const hoverIcon = [
  { icon: <HeartBlack />, value: "heart" },
  { icon: <ShoppingCartSimple2 />, value: "cart" },
  { icon: <Eye2 />, value: "eye" },
];

const Product = ({ product, badge_value }) => {
  const [isCardHover, setIsCardHover] = useState(false);
  let value = "";
  let color = "";

  if (badge_value) {
    value = badge_value.val;
    color = badge_value.color;
  }

  return (
    <div className="border rounded-sm border-[#E4E7E9] p-4 hover:shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)]"
    onMouseEnter={()=>setIsCardHover(true)}
    onMouseLeave={()=>setIsCardHover(false)}
    >
      <div className="relative mx-auto w-[fit-content] z-0 h-full">
        {isCardHover === true && (
          <div className="absolute bg-[#00000033]/20 h-full w-full flex  justify-center items-center gap-1">
            {hoverIcon.map((icon) => (
              <>
                <div
                  className={`h-[48px] w-[48px] flex justify-center items-center hover:cursor-pointer ${
                    icon.value === "eye" ? "bg-[#FA8232]" : "bg-white"
                  } rounded-full`}
                >
                  {icon.icon}
                </div>
              </>
            ))}
          </div>
        )}
        <div className="p-3">
          <img
            src={product.image}
            alt="Image of Phone"
            className=" w-full h-full"
          />
        </div>
        {badge_value && (
          <div
            className={`absolute top-0 left-0  text-[#FFFFFF] py-[5px] px-[10px] rounded-sm gap-[10px] uppercase`}
            style={{ backgroundColor: color }}
          >
            {value === "discount" ? (
              <>
                <div className="flex text-black font-semibold gap-1">
                  <span className="">{product.disc_percentage}%</span>
                  <span className="">off</span>
                </div>
              </>
            ) : (
              <span>{value}</span>
            )}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-[8px] justify-start overflow-hidden text-sm">
        <div className="flex gap-1 ">
          <span className="h-[16px]">
            <Rating value={product.star_value} readOnly />
          </span>
          <span className="text-[#77878F]">({product.review_count})</span>
        </div>
        <div className="text-[#191C1F] font-semibold ">
          {product.description}
        </div>
        <div className="text-[#2DA5F3] font-semibold">
          {value === "discount" ? (
            <>
              <div className="flex font-semibold gap-1">
                <span className="text-[#929FA5] line-through">
                  ${product.price}
                </span>
                <span className="">${product.disc_price}</span>
              </div>
            </>
          ) : (
            <span>${product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
