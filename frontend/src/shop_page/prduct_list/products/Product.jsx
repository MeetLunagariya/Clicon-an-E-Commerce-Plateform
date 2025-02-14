/* eslint-disable react/prop-types */
import { Rating } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Eye2, HeartBlack, ShoppingCartSimple2 } from "../../../assets/svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Store/cartSlice";
import { useNavigate } from "react-router";

const hoverIcon = [
  { icon: <HeartBlack />, value: "heart" },
  { icon: <ShoppingCartSimple2 />, value: "cart" },
  { icon: <Eye2 />, value: "eye" },
];

const Product = ({ product, badge_value }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [activeCard, setActiveCard] = useState(null);
  // console.log("activeCard", activeCard);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 1024);
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // const handleCardClick = (id) => {
  //   setActiveCard(activeCard === id ? null : id);
  // };

  return (
    <div
      className="border rounded-sm border-[#E4E7E9] p-4 hover:shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)]"
      onMouseEnter={() => setActiveCard(product.id)}
      onMouseLeave={() => setActiveCard(null)}
      // onClick={() => {isMobile && handleCardClick(product.id);
      //   console.log(product.id)
      // }}
    >
      <div className="relative mx-auto w-[fit-content] z-0 h-full">
        {activeCard && (
          <div className="absolute bg-[#00000033]/20 h-full w-full flex justify-center items-center gap-1">
            {hoverIcon.map((icon, index) => (
              <div
                key={index}
                className="h-[48px] w-[48px] flex justify-center items-center cursor-pointer bg-white hover:bg-[#FA8232] rounded-full text-black hover:text-white transition-colors"
                onClick={(e) => {
                  // e.stopPropagation();
                  if (icon.value === "cart") dispatch(addToCart({product}));
                  if (icon.value === "eye")
                    navigate(`../product_page/${product.id}`);
                }}
              >
                {React.cloneElement(icon.icon, {
                  className: "stroke-current w-6 h-6",
                })}
              </div>
            ))}
          </div>
        )}
        <div className="p-3">
          <img
            src={product.image}
            alt="Image of Phone"
            className="w-full h-full"
          />
        </div>
        {badge_value && (
          <div
            className={`absolute top-0 left-0 text-[#FFFFFF] py-[5px] px-[10px] rounded-sm gap-[10px] uppercase`}
            style={{ backgroundColor: badge_value.color }}
          >
            {badge_value.val === "discount" ? (
              <div className="flex text-black font-semibold gap-1">
                <span>{product.disc_percentage}%</span>
                <span>off</span>
              </div>
            ) : (
              <span>{badge_value.val}</span>
            )}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-[8px] justify-start overflow-hidden text-sm">
        <div className="flex gap-1">
          <span className="h-[16px]">
            <Rating value={product.star_value} readOnly />
          </span>
          <span className="text-[#77878F]">({product.review_count})</span>
        </div>
        <div className="text-[#191C1F] font-semibold">
          {product.description}
        </div>
        <div className="text-[#2DA5F3] font-semibold">
          {badge_value?.val === "discount" ? (
            <div className="flex font-semibold gap-1">
              <span className="text-[#929FA5] line-through">
                ${product.price}
              </span>
              <span>${product.disc_price}</span>
            </div>
          ) : (
            <span>${product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
