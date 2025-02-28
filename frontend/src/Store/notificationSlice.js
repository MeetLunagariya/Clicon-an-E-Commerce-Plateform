import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification(state, action) {
      console.log("notifications", action.payload);

      const newNotification = {
        id: action.payload.id || Date.now(),
        text: action.payload.text || "Default notification",
      };
      // console.log("newNotification", newNotification);

      state.notifications.push(newNotification);
      // console.log("State notifications", state.notifications);
    },
    removeNotification(state, action) {
      state.notifications = state.notifications.filter(
        (n) => n.id !== action.payload
      );
    },
  },
});

export const { addNotification, removeNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
