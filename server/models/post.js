import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
    },
    selectedFile: {
      type: String,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: new Date().toISOString(),
    },
  },
  { timeStamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
