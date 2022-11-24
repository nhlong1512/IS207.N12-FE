import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/user/userSlice";
import authReducer from "./reducer/auth/authSlice";
import productReducer from "./reducer/product/productSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    product: productReducer,
  },
});

export default store;
