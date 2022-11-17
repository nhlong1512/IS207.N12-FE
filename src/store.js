import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/user/userSlice";
import authReducer from "./reducer/auth/authSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
