import { createSlice } from "@reduxjs/toolkit";
import { mastercard, visa } from "../assets/img";

const initialState = {
  cards: [
    {
      id: 1,
      number: "4532 0123 4567 8901",
      name: "Kevin Gilbert",
      expiry: "01/35",
      cvc: "123",
      balance: 9999999,
      type: visa,
    },
    {
      id: 2,
      number: "2341 4323 6555 8832",
      name: "Kevin Gilbert",
      expiry: "01/30",
      cvc: "122",
      balance: 1,
      type: mastercard,
    },
  ],
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards.push(action.payload);
    },
    removeCard(state, action) {
      state.cards = state.cards.filter((card) => card.id!== action.payload);
    },
    updateCard(state, action) {
      const { id, updatedCard } = action.payload;
      state.cards = state.cards.map((card) =>
        card.id === id? {...card,...updatedCard } : card
      );
    },
  },
})

export const { addCard, removeCard, updateCard } = cardSlice.actions;

export default cardSlice.reducer;
