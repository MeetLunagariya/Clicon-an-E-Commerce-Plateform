import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [
    {
      id: "#96459761",
      status: "in progress",
      date: "Dec 30,2019 05:18",
      total: 1500,
      total_items: 5,
    },
    {
      id: "#71667167",
      status: "completed",
      date: "Feb 2, 2019 19:28",
      total: 80,
      total_items: 11,
    },
    {
      id: "#95214362",
      status: "cancelled",
      date: "Mar 20, 2019 23:14",
      total: 160,
      total_items: 3,
    },
    {
      id: "#71667167",
      status: "completed",
      date: "Feb 2, 2019 19:28",
      total: 80,
      total_items: 1,
    },
    {
      id: "#51746385",
      status: "completed",
      date: "Dec 30, 2019 07:52",
      total: 2300,
      total_items: 2,
    },
    {
      id: "#51746385",
      status: "cancelled",
      date: "Dec 30,2019 05:18",
      total: 70,
      total_items: 1,
    },
    {
      id: "#673971743",
      status: "completed",
      date: "Dec 7, 2019 23:26",
      total: 220,
      total_items: 1,
    },
  ],
  total_orders: 7,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setTotalOrders(state, action) {
      state.total_orders++;
    },
    setOrders(state, action) {
      state.orders.push(action.payload);
    },
  },
});

export const { setTotalOrders, setOrders } = orderSlice.actions;
export default orderSlice.reducer;

