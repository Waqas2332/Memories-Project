import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/index";

export const fetchPosts = createAsyncThunk("posts/fectchPosts", async () => {
  try {
    const response = await api.fetchPosts();
    return response.data.posts;
  } catch (error) {
    console.log(error.message);
  }
});
