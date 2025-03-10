import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishListReducer from "./wishlistSlice";
import notificationReducer from "./notificationSlice";
import cardReducer from "./payment_cardSlice";
import orderReducer from "./orderSlice";
import { usersApi } from "./apiSlice";

export default configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,  // Add the reducer to your store's middleware
    cart: cartReducer,
    WishList: wishListReducer,
    notification: notificationReducer,
    card: cardReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
