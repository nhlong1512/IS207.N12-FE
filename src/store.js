import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/user/userSlice";
import authReducer from "./reducer/auth/authSlice";
import productReducer from "./reducer/product/productSlice";
import billReducer from "./reducer/bill/billSlice";
import user_adminReducer from "./reducer/admin/user/userSlice";
import product_adminReducer from "./reducer/admin/product/productSlice";
import order_adminReducer from "./reducer/admin/order/orderSlice";
import hoadon_adminReducer from "./reducer/admin/hoadon/hoadonSlice";
import blog_adminReducer from "./reducer/admin/blog/blogSlice";
import khuyenmai_adminReducer from "./reducer/admin/khuyenmai/khuyenmaiSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    product: productReducer,
    bill: billReducer,
    user_admin: user_adminReducer,
    product_admin: product_adminReducer,
    order_admin: order_adminReducer,
    hoadon_admin: hoadon_adminReducer,
    blog_admin: blog_adminReducer,
    khuyenmai_admin: khuyenmai_adminReducer,
  },
});

export default store;
