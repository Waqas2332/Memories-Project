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
