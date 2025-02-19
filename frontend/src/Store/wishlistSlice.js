import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wished_items: [],
  total_wished_items: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      console.log(action.payload);
      const newItem = action.payload;
      const existingItem = state.wished_items.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.wished_items.push(newItem);
        state.total_wished_items++;
      }

      console.log("wished_items", state.wished_items);
    },

    removeFromWishlist(state, action) {
      const itemId = action.payload;
      state.wished_items = state.wished_items.filter(
        (item) => item.id !== itemId
      );
      state.total_wished_items--;
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
