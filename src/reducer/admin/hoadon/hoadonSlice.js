import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hoadon: [],
  allHoadon: [],
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
      state.allHoadon = payload.hoadon;
      state.status = payload.true;
    },
    getHoaDonFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.false;
    },
    onFilterHoaDon: (state, { payload }) => {
      console.log(payload);
      if (payload.length > 0) {
        const filterProduct = state.allHoadon.filter((product) => {
          console.log(payload, product.TenSP);

          return product.hoten.toLowerCase().includes(payload.toLowerCase());
        });
        state.hoadon = filterProduct;
      } else state.hoadon = state.allHoadon;
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
  onFilterHoaDon,
  //   getMaHDAndMaKH,
} = hoadonSlice.actions;

export default hoadonSlice.reducer;
