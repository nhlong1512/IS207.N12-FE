import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  detailUser: {},
  isLoading: false,
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
} = userSlice.actions;

export default userSlice.reducer;
