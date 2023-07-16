import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
} from "../actions/posts";

const initialState = {
  posts: [],
  status: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "success";
      state.posts = action.payload;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.status = "success";
      state.posts = state.posts.concat(action.payload);
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.status = "success";
      state.posts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.status = "success";
      console.log(action.payload);
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    });
  },
});

export default postsSlice.reducer;
