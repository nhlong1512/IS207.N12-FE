import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/user/userSlice";
import authReducer from "./reducer/auth/authSlice";
import productReducer from "./reducer/product/productSlice";
import billReducer from "./reducer/bill/billSlice";
import user_adminReducer from "./reducer/admin/user/userSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    product: productReducer,
    bill: billReducer,
    user_admin: user_adminReducer,
  },
});

export default store;
