import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalProduct: [],
  isLoading: false,
  status: false,
  error: "",
  message: "",
  numberProduct: 0,
  //   replyTicketError: "",
  //   searchTicketList: [],
  //   selectedTicket: {},
  //   replyMsg: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductsLoading: (state) => {
      state.isLoading = true;
    },
    fetchProductsSuccess: (state, { payload }) => {
      console.log(payload.sanpham);
      state.status = payload.status;
      state.message = payload.message;
      state.products = payload.sanpham;
      state.isLoading = false;
    },
    fetchProductsFail: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
      state.status = payload.status;
    },
    addProductToCard: (state, { payload }) => {
      console.log(payload);
      state.numberProduct = payload;
      console.log("num", state.numberProduct);
    },
    
  },
});

const { reducer, actions } = productSlice;

export const {
  fetchProductsLoading,
  fetchProductsSuccess,
  fetchProductsFail,
  addProductToCard,
} = actions;

export default reducer;
