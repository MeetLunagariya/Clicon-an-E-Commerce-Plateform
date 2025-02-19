// src/features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    emptyCart(state) {
      state.items = [];
      state.totalQuantity = 0; // Reset total quantity when cart is emptied
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const quantityToAdd = newItem.quantity || 1;

      const existingItem = state.items.find(
        (item) => item.id === newItem.product.id
      );

      if (existingItem) {
        existingItem.quantity += quantityToAdd; // Increment by the specified amount
      } else {
        state.items.push({ ...newItem.product, quantity: quantityToAdd }); // Add with specified quantity
      }

      state.totalQuantity += quantityToAdd; // Update total quantity
      // console.log(state.items.length)
    },
    removeItemQuantity(state, action) {
      // console.log('dlt...')
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity--;
        state.totalQuantity--;
        // console.log( existingItem.quantity)
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity -= existingItem.quantity;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeItemQuantity, removeFromCart, clearCart, emptyCart } =
  cartSlice.actions;
export default cartSlice.reducer;
