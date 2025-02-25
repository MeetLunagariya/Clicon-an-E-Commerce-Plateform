import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishListReducer from "./wishlistSlice";
import notificationReducer from "./notificationSlice";
import cardReducer from "./payment_cardSlice";
import orderReducer from "./orderSlice";
export default configureStore({
  reducer: {
    cart: cartReducer,
    WishList: wishListReducer,
    notification: notificationReducer,
    card: cardReducer,
    order: orderReducer,
  },
});
