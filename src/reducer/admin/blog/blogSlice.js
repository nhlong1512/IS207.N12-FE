import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  //   detailOrder: {},
  isLoading: false,
  status: false,
  //   MaHD: "",
  //   MaKH: "",
};

const blogSlice = createSlice({
  name: "blog_admin",
  initialState,
  reducers: {
    getBlogPending: (state) => {
      state.isLoading = true;
    },
    getBlogSuccess: (state, { payload }) => {
      console.log("payload", payload.blog);
      state.isLoading = false;
      state.blogs = payload.blog;
      state.status = payload.status;
    },
    getBlogFail: (state, { payload }) => {
      console.log("payload1", payload.blog);
      state.isLoading = false;
      state.status = payload.status;
    },
  },
});

export const { getBlogPending, getBlogSuccess, getBlogFail } =
  blogSlice.actions;

export default blogSlice.reducer;
