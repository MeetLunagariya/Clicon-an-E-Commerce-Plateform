/* eslint-disable react/prop-types */
import { Rating } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Eye2, HeartBlack, ShoppingCartSimple2 } from "../../../assets/svg";
import { addToCart } from "../../../Store/cartSlice";
import { addToWishlist } from "../../../Store/wishlistSlice";
import { addNotification } from "../../../Store/notificationSlice";
import {
  Database,
  getDatabase,
  ref,
  runTransaction,
  update,
} from "firebase/database";

const hoverIcon = [
  { icon: <HeartBlack />, value: "heart" },
  { icon: <ShoppingCartSimple2 />, value: "cart" },
  { icon: <Eye2 />, value: "eye" },
];

const Product_Item = ({ activeCard, product, badge_value }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fields } = product;
  // console.log("fields", fields);

  return (
    <>
      <div className="relative mx-auto w-[fit-content] z-0 h-full">
        {activeCard && (
          <div className="absolute bg-[#00000033]/20 h-full w-full flex justify-center items-center gap-1">
            {hoverIcon.map((icon, index) => (
              <div
                key={index}
                className="h-[48px] w-[48px] flex justify-center items-center cursor-pointer bg-white hover:bg-[#FA8232] rounded-full text-black hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  if (icon.value === "heart") {
                    dispatch(addToWishlist(fields));
                    dispatch(
                      addNotification({
                        id: Date.now(),
                        text: "Added to wishlist",
                      })
                    );
                  } else if (icon.value === "cart") {
                    dispatch(addToCart({ fields }));
                    dispatch(
                      addNotification({
                        id: Date.now(),
                        text: "Added to Cart",
                      })
                    );
                  } else if (icon.value === "eye") {
                    navigate(`./product_page/${fields.id.integerValue}`);
                  }
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
            src={fields?.image.stringValue}
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
                <span>{fields?.disc_percentage.integerValue}%</span>
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
            <Rating value={fields?.star_value.integerValue} readOnly />
          </span>
          <span className="text-[#77878F]">({fields?.review_count.integerValue})</span>
        </div>
        <div className="text-[#191C1F] font-semibold line-clamp-2">
          {fields?.description.stringValue}
        </div>
        <div className="text-[#2DA5F3] font-semibold">
          {badge_value?.val === "discount" ? (
            <div className="flex font-semibold gap-1">
              <span className="text-[#929FA5] line-through">
                ${fields?.price.integerValue}
              </span>
              <span>${fields?.disc_price.integerValue}</span>
            </div>
          ) : (
            <span>${fields?.price.integerValue}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default Product_Item;
