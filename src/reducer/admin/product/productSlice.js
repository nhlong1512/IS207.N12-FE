import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalProduct: [],
  detailProduct: {},
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

    getDetailProduct: (state, { payload }) => {
      console.log(payload);
      state.detailProduct = payload;
    },
    updateProductPending: (state) => {
      state.isLoading = true;
    },
    updateProductSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.detailUser = payload.sanpham;
      state.status = payload.status;
    },
    updateProductFail: (state, { payload }) => {
      state.isLoading = false;
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
    onFilterProduct: (state, { payload }) => {
      console.log(payload);
      if (payload.length > 0) {
        const filterProduct = state.totalProduct.filter((product) => {
          console.log(payload, product.TenSP);

          return product.TenSP.toLowerCase().includes(payload.toLowerCase());
        });
        state.products = filterProduct;
      } else state.products = state.totalProduct;
    },
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
  getDetailProduct,
  updateProductPending,
  updateProductSuccess,
  updateProductFail,
  //   addProductToCard,
  //   searchFilterChanged,
  onFilterProduct,
  //   onPhanLoai,
} = actions;

export default reducer;
