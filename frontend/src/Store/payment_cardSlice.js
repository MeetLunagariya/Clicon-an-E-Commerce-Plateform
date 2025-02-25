import { createSlice } from "@reduxjs/toolkit";
import { mastercard, visa } from "../assets/img";
import { addNotification } from "./notificationSlice";

const initialState = {
  cards: [
    {
      id: 1,
      number: "4532 0123 4567 8901",
      name: "Kevin Gilbert",
      expiryMonth: "01",
      expiryYear: "2030",
      cvc: "123",
      balance: 9999999,
      type: visa,
    },
    {
      id: 2,
      number: "2341 4323 6555 8832",
      name: "Kevin Gilbert",
      expiryMonth: "01",
      expiryYear: "2030",
      cvc: "122",
      balance: 1,
      type: mastercard,
    },
  ],
  showApplicationForm: false,
  maxCards: 2,
  isUpdate: false,
  selectedCard: null,
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setIsUpdate(state, action) {
      state.isUpdate = !state.isUpdate;
    },
    setSelectedCard(state, action) {
      state.selectedCard = action.payload;
    },
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
      state.maxCards -= 1;
    },
    updateCard(state, action) {
      const { id, updatedCard } = action.payload;
      console.log("id", id);
      state.cards = state.cards.map((card) =>
        card.id === id ? { ...card, ...updatedCard } : card
      );
      state.showApplicationForm = false;
      state.isUpdate = false;
    },
  },
});

// Store the original addCard action creator
const {
  addCard: originalAddCard,
  removeCard: originalRemoveCard,
  updateCard: originalUpdateCard,
  showApplicationForm,
  setSelectedCard,
  setIsUpdate,
} = cardSlice.actions;

// Redefine addCard as a thunk
export const addCard = (newCard) => (dispatch) => {
  dispatch(originalAddCard(newCard));
  dispatch(addNotification({ text: `New card added: ${newCard.number}` }));
};
export const updateCard = (updatedCard) => (dispatch) => {
  console.log("updatedCard", updatedCard);
  dispatch(originalUpdateCard(updatedCard));
  dispatch(
    addNotification({ text: `Card updated: ${updatedCard.updatedCard.number}` })
  );
};

export const removeCard = (id) => (dispatch) => {
  dispatch(originalRemoveCard(id));
  dispatch(
    addNotification({ text: `Card deleted: ${id}` })
  );
};

// Export other action creators
export {  showApplicationForm, setSelectedCard, setIsUpdate };

export default cardSlice.reducer;
