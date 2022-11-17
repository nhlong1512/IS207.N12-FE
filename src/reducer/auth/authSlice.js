import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  status: false,
  error: true,
  message: "",
  isAuthenticated: false,
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
  },
});

const { reducer, actions } = authSlice;

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  setAuth,
} = actions;

export default reducer;
