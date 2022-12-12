import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bill: [],
  detailBill: {},
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
      console.log("payload", payload.donhang);
      state.bill = payload.donhang;
      state.isLoading = false;
    },
    fetchBillFail: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
      state.status = payload.status;
    },

    getDetailBill: (state, { payload }) => {
      state.detailBill = payload;
    },
  },
});

export const {
  fetchBillLoading,
  fetchBillSuccess,
  fetchBillFail,
  getDetailBill,
} = billSlice.actions;

export default billSlice.reducer;
