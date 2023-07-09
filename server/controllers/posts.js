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

export const createPost = async (req, res, next) => {
  const post = req.body;
  const newPost = new Post(post);
  try {
    await newPost.save();
    res
      .status(201)
      .json({ post, newPost, message: "Post Created Successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
