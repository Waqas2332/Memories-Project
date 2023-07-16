import mongoose, { mongo } from "mongoose";
import Post from "../models/post.js";

export const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res
      .status(200)
      .json({ posts: posts, message: "Posts Fetched successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = (req, res, next) => {
  const post = req.body;
  // post.title = req.body.title;
  // post.selectedFile = req.file.path;
  // console.log(post.selectedFile);
  // post.creator = req.body.creator;
  // post.tags = req.body.tags;
  // post.message = req.body.message;
  const newPost = new Post(post);
  newPost
    .save()
    .then((post) => {
      res
        .status(201)
        .json({ post, post, message: "Post Created Successfully" });
    })
    .catch((err) => {
      res.status(409).json({ message: err.message });
    });
};

export const updatePost = async (req, res, next) => {
  const id = req.params.id;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No Post Found" });
  }
  try {
    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
    res
      .status(200)
      .json({ message: "Post updated successfully", post: updatedPost });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deletePost = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No Post Found" });
  }
  try {
    await Post.findByIdAndRemove(id);
    res.status(200).json({ message: "Post Deleted Succesfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
