/* eslint-disable react/prop-types */
import { Rating } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Eye2, HeartBlack, ShoppingCartSimple2 } from "../../../assets/svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Store/cartSlice";
import { addToWishlist } from "../../../Store/wishlistSlice";
import { useNavigate } from "react-router";
import { FiCheckSquare, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { addNotification } from "../../../Store/notificationSlice";

const hoverIcon = [
  { icon: <HeartBlack />, value: "heart" },
  { icon: <ShoppingCartSimple2 />, value: "cart" },
  { icon: <Eye2 />, value: "eye" },
];

// const NOTIFICATION_TTL = 5000;

// const Notification = ({ text, id, removeNotif }) => {
//   useEffect(() => {
//     const timeoutRef = setTimeout(() => {
//       removeNotif(id);
//     }, NOTIFICATION_TTL);

//     return () => clearTimeout(timeoutRef);
//   }, []);

//   return (
//     <motion.div
//       layout
//       initial={{ y: -15, scale: 0.95 }}
//       animate={{ y: 0, scale: 1 }}
//       exit={{ x: "100%", opacity: 0 }}
//       transition={{ duration: 0.35, ease: "easeOut" }}
//       className="p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white bg-[#FA8232] pointer-events-auto"
//     >
//       <FiCheckSquare className="mt-0.5" />
//       <span>{text}</span>
//       <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
//         <FiX />
//       </button>
//     </motion.div>
//   );
// };

const Product = ({ product, badge_value }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null);
  const { notifications } = useSelector((state) => state.notification);
  // console.log("notifications", notifications);

  return (
    <>
      <div
        className="border rounded-sm border-[#E4E7E9] p-4 hover:shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)]"
        onMouseEnter={() => setActiveCard(product.id)}
        onMouseLeave={() => setActiveCard(null)}
      >
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
                      navigate(`../product_page/${product.id}`);
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
      {/* <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
        <AnimatePresence>
          {notifications.map((n) => (
            <Notification removeNotif={removeNotif} {...n} key={n.id} />
          ))}
        </AnimatePresence>
      </div> */}
    </>
  );
};

export default Product;
