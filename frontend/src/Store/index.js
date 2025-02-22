import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishListReducer from "./wishlistSlice";
import notificationReducer from "./notificationSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    WishList: wishListReducer,
    notification: notificationReducer,
  },
});
