import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  detailOrder: {},
  isLoading: false,
  status: false,
};

const orderSlice = createSlice({
  name: "order_admin",
  initialState,
  reducers: {
    getAllOrderPending: (state) => {
      state.isLoading = true;
    },
    getAllOrderSuccess: (state, { payload }) => {
      console.log("payload", payload.donhang);
      state.isLoading = false;
      state.orders = payload.donhang;
      state.status = payload.status;
    },
    getAllOrderFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
    },

    // updateStaffPending: (state) => {
    //   state.isLoading = true;
    // },
    // updateStaffSuccess: (state, { payload }) => {
    //   console.log("payload", payload.user);
    //   state.isLoading = false;
    //   state.detailUser = payload.user;
    //   state.status = payload.status;
    // },
    // updateStaffFail: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.status = payload.status;
    // },
    // getDetailUser: (state, { payload }) => {
    //   state.detailUser = payload;
    // },
  },
});

export const { getAllOrderPending, getAllOrderSuccess, getAllOrderFail } =
  orderSlice.actions;

export default orderSlice.reducer;
