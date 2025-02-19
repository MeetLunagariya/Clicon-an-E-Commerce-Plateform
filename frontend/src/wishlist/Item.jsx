import React, { useEffect, useRef, useState } from "react";
import { ShoppingCartSimple_advertise, XCircle_Gray } from "../assets/svg";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist, addToWishlist } from "../Store/wishlistSlice";
import { addToCart, removeFromCart } from "../Store/cartSlice";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const [isItemInCart, setIsItemInCart] = useState(null);
  const { wished_items } = useSelector((state) => state.WishList);
  const { items } = useSelector((state) => state.cart);

  // to check Item is already in cart or not
  useEffect(() => {
    const isItemInCart = items.some(
      (whished_item) => whished_item.id === item.id
    );
    setIsItemInCart(isItemInCart);
  }, [items]);

  return (
    <>
      <div className="grid grid-cols-7 gap-6 py-1">
        {/* about product */}
        <div className="col-span-3 flex items-center gap-3">
          <div className="h-full w-[72px]">
            <img src={item.image} alt="" />
          </div>
          <span className="text-gray-900 text-sm">{item.description}</span>
        </div>
        {/* product price  */}
        <div className="flex items-center gap-1 ">
          {item.badge_id === 4 ? (
            <>
              <span className="line-through text-gray-400 text-sm">
                ${item.price}
              </span>
              <span className="text-gray-700 text-sm font-medium">
                ${item.disc_price}
              </span>
            </>
          ) : (
            <span className="text-gray-700 text-sm font-medium">
              ${item.price}
            </span>
          )}
        </div>
        {/* Stock Status */}

        {item.stock_status ? (
          <div className="text-[#2DB224] flex items-center">In Stock</div>
        ) : (
          <div className="text-[#EE5858] flex items-center">Out of stock</div>
        )}

        <div className="flex items-center text-center col-span-2 gap-10">
          <button
            className="flex uppercase min-w-[241px] bg-[#FA8232] justify-center items-center rounded-sm gap-3 px-4 py-2 disabled:cursor-not-allowed"
            type="button"
            onClick={() => {
              isItemInCart
                ? dispatch(removeFromCart(item.id))
                : dispatch(addToCart({ product: item, quantity: 1 }));
            }}
            disabled = {!item.stock_status}
          >
            <span className="text-white font-medium text-lg">
              {isItemInCart ? "Remove from cart" : "add to cart"}
            </span>
            <span>
              <ShoppingCartSimple_advertise />
            </span>
          </button>
          <span
            className="hover:cursor-pointer transition-colors duration-300 text-[#929FA5] hover:text-[#EE5858]"
            onClick={() => dispatch(removeFromWishlist(item.id))}
          >
            <XCircle_Gray />
          </span>
        </div>
      </div>
    </>
  );
};

export default Item;
