import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    isLoadingBlogPosts: true,
    blogPosts: [],
  },
  reducers: {
    onAddBlogPost: (state, { payload }) => {},
    onLoadBlogPosts: (state, { payload }) => {
      state.isLoadingBlogPosts = false;
      state.blogPosts = payload;
    },
    onLogoutBlog: (state) => {
      state.isLoadingBlogPosts = true;
      state.blogPosts = [];
    },
  },
});

export const { onAddBlogPost, onLoadBlogPosts, onLogoutBlog } =
  blogSlice.actions;
