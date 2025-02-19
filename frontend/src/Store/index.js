import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishListReducer from "./wishlistSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    WishList : wishListReducer,
  },
});
