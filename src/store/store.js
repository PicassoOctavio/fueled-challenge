import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { blogSlice } from "./blog/blogSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    blog: blogSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
