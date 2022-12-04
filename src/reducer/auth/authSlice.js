import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  status: false,
  error: false,
  message: "",
  isEmailExist: false,
  isAuthenticated: false,
  OTP: 0,
  forgotEmail: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state, { payload }) => {
      state.isLoading = true;
      state.error = true;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.status = payload.status;
      state.error = false;
      state.message = payload.message;
    },
    loginFailure: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.error = false;
      state.message = payload.message;
    },
    logoutSuccess: (state, { payload }) => {
      state.isAuthenticated = false;
      state.status = payload.status;
      state.error = true;
      state.message = payload.message;
    },
    setAuth: (state, { payload }) => {
      state.isAuthenticated = true;
    },
    getOTP: (state, { payload }) => {
      state.OTP = payload;
    },
    getForgotEmail: (state, { payload }) => {
      state.forgotEmail = payload;
    },

    getForgotEmailStart: (state, { payload }) => {
      state.isLoading = true;
    },
    getForgotEmailSuccess: (state, { payload }) => {
      // console.log("successs", payload.status);
      state.isLoading = false;
      state.isEmailExist = true;
      // state.forgotEmail = payload;
    },
    getForgotEmailFailure: (state, { payload }) => {
      state.isLoading = false;
      state.isEmailExist = false;
    },
  },
});

const { reducer, actions } = authSlice;

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  setAuth,
  getOTP,
  getForgotEmail,
  getForgotEmailStart,
  getForgotEmailSuccess,
  getForgotEmailFailure,
} = actions;

export default reducer;
