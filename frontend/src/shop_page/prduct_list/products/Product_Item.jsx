/* eslint-disable react/prop-types */
import { Rating } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Eye2, HeartBlack, ShoppingCartSimple2 } from "../../../assets/svg";
import { addToCart } from "../../../Store/cartSlice";
import { addToWishlist } from "../../../Store/wishlistSlice";
import { addNotification } from "../../../Store/notificationSlice";

const hoverIcon = [
  { icon: <HeartBlack />, value: "heart" },
  { icon: <ShoppingCartSimple2 />, value: "cart" },
  { icon: <Eye2 />, value: "eye" },
];

const Product_Item = ({ activeCard, product, badge_value }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
                    dispatch(addToWishlist(product));
                    dispatch(
                      addNotification({
                        id: Date.now(),
                        text: "Added to wishlist",
                      })
                    );
                  }
                  if (icon.value === "cart") {
                    dispatch(addToCart({ product }));
                    dispatch(
                      addNotification({
                        id: Date.now(),
                        text: "Added to Cart",
                      })
                    );
                  }
                  if (icon.value === "eye") {
                    navigate(`./product_page/${product.id}`);
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
        <div className="text-[#191C1F] font-semibold line-clamp-2">
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
    </>
  );
};

export default Product_Item;
