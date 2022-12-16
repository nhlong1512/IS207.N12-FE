import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  allUsers: [],
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
      state.allUsers = payload.nguoidung;
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

    onFilterStaff: (state, { payload }) => {
      console.log(payload);
      if (payload.length > 0) {
        const filterProduct = state.allUsers.filter((product) => {
          console.log(payload, product.TenSP);

          return product.hoten.toLowerCase().includes(payload.toLowerCase());
        });
        state.users = filterProduct;
      } else state.users = state.allUsers;
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
  onFilterStaff,
} = userSlice.actions;

export default userSlice.reducer;
