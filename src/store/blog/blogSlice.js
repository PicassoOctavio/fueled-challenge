import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    isLoadingBlogPosts: true,
    isLoadingPages: true,
    blogPosts: [],
    pages: [],
  },
  reducers: {
    onAddBlogPost: (state, { payload }) => {},
    onLoadBlogPosts: (state, { payload }) => {
      state.isLoadingBlogPosts = false;
      state.blogPosts = payload;
    },
    onLoadPages: (state, { payload }) => {
      state.isLoadingPages = false;
      state.pages = payload;
    },
    onLogoutBlog: (state) => {
      state.isLoadingBlogPosts = true;
      state.blogPosts = [];
      state.pages = [];
    },
  },
});

export const { onAddBlogPost, onLoadBlogPosts, onLoadPages, onLogoutBlog } =
  blogSlice.actions;
