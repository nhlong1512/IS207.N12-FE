import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  allBlogs: [],
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
      console.log("payload2", payload.blog);
      state.isLoading = false;
      state.blogs = payload.blog;
      state.allBlogs = payload.blog;
      state.status = payload.status;
    },
    getBlogFail: (state, { payload }) => {
      console.log("payload1", payload.blog);
      state.isLoading = false;
      state.status = payload.status;
    },
    onFilterBlog: (state, { payload }) => {
      console.log(payload);
      if (payload.length > 0) {
        const filterProduct = state.allBlogs.filter((product) => {
          return product.TieuDe.toLowerCase().includes(payload.toLowerCase());
        });
        state.blogs = filterProduct;
      } else state.blogs = state.allBlogs;
    },
  },
});

export const { getBlogPending, getBlogSuccess, getBlogFail, onFilterBlog } =
  blogSlice.actions;

export default blogSlice.reducer;
