import { createSlice } from "@reduxjs/toolkit";
import { mastercard, visa } from "../assets/img";
import { addNotification } from "./notificationSlice";

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
  showApplicationForm: false,
  maxCards: 2,
  isUpdate:false,
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    showApplicationForm(state) {
      state.showApplicationForm = !state.showApplicationForm;
    },
    addCard(state, action) {
      state.maxCards = state.maxCards + 1;
      state.cards.push(action.payload);
      state.showApplicationForm = false;
    },
    removeCard(state, action) {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    updateCard(state, action) {
      const { id, updatedCard } = action.payload;
      state.cards = state.cards.map((card) =>
        card.id === id ? { ...card, ...updatedCard } : card
      );
    },
  },
});

// Store the original addCard action creator
const {
  addCard: originalAddCard,
  removeCard,
  updateCard,
  showApplicationForm,
} = cardSlice.actions;

// Redefine addCard as a thunk
export const addCard = (newCard) => (dispatch) => {
 
    dispatch(originalAddCard(newCard));
    dispatch(addNotification({ text: `New card added: ${newCard.number}` }));
 
};

// Export other action creators
export { removeCard, updateCard, showApplicationForm };

export default cardSlice.reducer;
