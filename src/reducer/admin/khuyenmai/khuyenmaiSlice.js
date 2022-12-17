import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  khuyenmais: [],
  selectedKhuyenmai: {},
  //   detailOrder: {},
  isLoading: false,
  status: false,
  //   MaHD: "",
  //   MaKH: "",
};

const khuyenmaiSlice = createSlice({
  name: "khuyenmai_admin",
  initialState,
  reducers: {
    getKhuyenmaiPending: (state) => {
      state.isLoading = true;
    },
    getKhuyenmaiSuccess: (state, { payload }) => {
      console.log("payload", payload.khuyenmai);
      state.isLoading = false;
      state.khuyenmais = payload.khuyenmai;
      state.selectedKhuyenmai = payload.khuyenmai.find(
        (item) => parseInt(item.Status) == 1
      );
      state.status = payload.status;
    },
    getKhuyenmaiFail: (state, { payload }) => {
      console.log("payload1", payload.khuyenmai);
      state.isLoading = false;
      state.status = payload.status;
    },
  },
});

export const { getKhuyenmaiPending, getKhuyenmaiSuccess, getKhuyenmaiFail } =
  khuyenmaiSlice.actions;

export default khuyenmaiSlice.reducer;
