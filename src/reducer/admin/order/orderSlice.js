import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  allOrders: [],
  detailOrder: {},
  isLoading: false,
  status: false,
  MaHD: "",
  MaKH: "",
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
      state.allOrders = payload.donhang;
      state.status = payload.status;
    },
    getAllOrderFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
    },
    getMaHDAndMaKH: (state, { payload }) => {
      state.MaHD = payload.MaHD;
      state.MaKH = payload.MaKH;
    },
    onFilterOrder: (state, { payload }) => {
      console.log(payload);
      if (payload.length > 0) {
        const filterProduct = state.allOrders.filter((product) => {
          console.log(payload, product.TenSP);

          return product.HoTen.toLowerCase().includes(payload.toLowerCase());
        });
        state.orders = filterProduct;
      } else state.orders = state.allOrders;
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

export const {
  getAllOrderPending,
  getAllOrderSuccess,
  getAllOrderFail,
  getMaHDAndMaKH,
  onFilterOrder
} = orderSlice.actions;

export default orderSlice.reducer;
