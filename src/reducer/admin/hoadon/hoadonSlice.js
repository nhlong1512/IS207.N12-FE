import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hoadon: [],
  //   detailOrder: {},
  isLoading: false,
  status: false,
  //   MaHD: "",
  //   MaKH: "",
};

const hoadonSlice = createSlice({
  name: "hoadon_admin",
  initialState,
  reducers: {
    getHoaDonPending: (state) => {
      state.isLoading = true;
    },
    getHoaDonSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.hoadon = payload.hoadon;
      state.status = payload.true;
    },
    getHoaDonFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.false;
    },
    // getMaHDAndMaKH: (state, { payload }) => {
    //   state.MaHD = payload.MaHD;
    //   state.MaKH = payload.MaKH;
    // },

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

export const {
  getHoaDonPending,
  getHoaDonSuccess,
  getHoaDonFail,
  //   getMaHDAndMaKH,
} = hoadonSlice.actions;

export default hoadonSlice.reducer;
