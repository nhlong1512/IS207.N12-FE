import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  detailUser: {},
  isLoading: false,
  status: false,
};

const userSlice = createSlice({
  name: "user_admin",
  initialState,
  reducers: {
    getAllUserPending: (state) => {
      state.isLoading = true;
    },
    getAllUserSuccess: (state, { payload }) => {
      console.log("payload", payload.nguoidung);
      state.isLoading = false;
      state.users = payload.nguoidung;
      state.status = payload.status;
    },
    getAllUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
    },

    updateStaffPending: (state) => {
      state.isLoading = true;
    },
    updateStaffSuccess: (state, { payload }) => {
      console.log("payload", payload.user);
      state.isLoading = false;
      state.detailUser = payload.user;
      state.status = payload.status;
    },
    updateStaffFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
    },
    getDetailUser: (state, { payload }) => {
      state.detailUser = payload;
    },
  },
});

export const {
  getAllUserPending,
  getAllUserSuccess,
  getAllUserFail,
  getDetailUser,
  updateStaffPending,
  updateStaffSuccess,
  updateStaffFail,
} = userSlice.actions;

export default userSlice.reducer;
