import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

function Posts() {
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);
  return (
    <>
      <h1>Posts</h1>;
      <Post />
    </>
  );
}

export default Posts;
