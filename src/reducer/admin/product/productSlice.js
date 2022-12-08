import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalProduct: [],

  isLoading: false,
  status: false,
  error: "",
  message: "",
  //   numberProduct: 0,
  //   searchText: "",
  //   replyTicketError: "",
  //   searchTicketList: [],
  //   selectedTicket: {},
  //   replyMsg: "",
};

const productSlice = createSlice({
  name: "product_admin",
  initialState,
  reducers: {
    fetchProductsLoading: (state) => {
      state.isLoading = true;
    },
    fetchProductsSuccess: (state, { payload }) => {
      state.status = payload.status;
      state.message = payload.message;
      state.products = payload;
      state.totalProduct = payload;
      state.isLoading = false;
      console.log("payload", payload);
    },
    fetchProductsFail: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
      state.status = payload.status;
    },
    // addProductToCard: (state, { payload }) => {
    //   console.log(payload);
    //   state.numberProduct = payload;
    //   console.log("num", state.numberProduct);
    // },
    // searchFilterChanged: (state, { payload }) => {
    //   state.searchText = payload;
    // },
    // onFilterProduct: (state, { payload }) => {
    //   console.log(payload);
    //   if (payload.length > 0) {
    //     const filterProduct = state.totalProduct.filter((product) => {
    //       console.log(payload, product.TenSP);

    //       return product.TenSP.includes(payload);
    //     });
    //     state.products = filterProduct;
    //   } else state.products = state.totalProduct;
    // },
    // onPhanLoai: (state, { payload }) => {
    //   if (payload > 0) {
    //     const filterProduct = state.totalProduct.filter(
    //       (product) => product.MaPL === payload
    //     );

    //     console.log(filterProduct);
    //     state.products = filterProduct;
    //   } else {
    //     state.products = state.totalProduct;
    //   }
    // },
  },
});

const { reducer, actions } = productSlice;

export const {
  fetchProductsLoading,
  fetchProductsSuccess,
  fetchProductsFail,
  //   addProductToCard,
  //   searchFilterChanged,
  //   onFilterProduct,
  //   onPhanLoai,
} = actions;

export default reducer;
