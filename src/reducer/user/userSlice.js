import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  status: false,
  message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserPending: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
      state.status = payload.status;
    },
    getUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
    },
    deleteUserSuccess: (state, { payload }) => {
      state.user = {};
    },
    updateUserPending: (state) => {
      state.isLoading = true;
    },
    updateUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
      state.status = payload.status;
    },
    updateUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
    },
    deleteUserSuccess: (state, { payload }) => {
      state.user = {};
    },
  },
});

export const {
  getUserPending,
  getUserSuccess,
  getUserFail,
  updateUserPending,
  updateUserSuccess,
  updateUserFail,
  deleteUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
