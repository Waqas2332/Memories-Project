import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/index";

export const fetchPosts = createAsyncThunk("posts/fectchPosts", async () => {
  try {
    const response = await api.fetchPosts();
    console.log(response);
    return response.data.posts;
  } catch (error) {
    console.log(error.message);
  }
});

export const createPost = createAsyncThunk("posts/createPost", async (post) => {
  try {
    const response = await api.createPost(post);
    return response.data.post;
  } catch (error) {
    console.log(error.message);
  }
});

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ id, post }) => {
    console.log(post);
    try {
      const response = await api.updatePost(id, post);
      return response.data.post;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  try {
    const response = await api.deletePost(id);
    if (response.status === 200) {
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
});

export const likePost = createAsyncThunk("posts/likePost", async (id) => {
  try {
    const response = await api.likePost(id);
    if (response.status === 200) {
      return response.data.post;
    }
  } catch (error) {
    console.log(error.message);
  }
});
