import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bill: [],
  isLoading: false,
  status: false,
  error: "",
};

const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    fetchBillLoading: (state) => {
      state.isLoading = true;
    },
    fetchBillSuccess: (state, { payload }) => {
      state.bill = payload.donhang;
      state.isLoading = false;
    },
    fetchBillFail: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
      state.status = payload.status;
    },
  },
});

export const { fetchBillLoading, fetchBillSuccess, fetchBillFail } =
  billSlice.actions;

export default billSlice.reducer;
