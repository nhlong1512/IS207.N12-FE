import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bill: [],
  detailBill: {},
  idDetail: 0,
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
      state.detailBill = payload.donhang.find(
        (item) => item.id == state.idDetail
      );
      state.isLoading = false;
    },
    fetchBillFail: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
      state.status = payload.status;
    },

    getDetailBill: (state, { payload }) => {
      state.detailBill = payload;
      state.idDetail = payload.id;
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
