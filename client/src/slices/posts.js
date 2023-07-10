import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, createPost } from "../actions/posts";

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
      state.posts = state.posts.concat(action.payload);
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.status = "success";
      state.posts = state.posts.concat(action.payload);
    });
  },
});

export default postsSlice.reducer;
