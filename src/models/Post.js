import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    id: {type: String},
    author: {type: String, required: true},
    createdAt: {type: String, required: true},
    updatedAt: {type: String},
    post_title: {type: String, required: true},
    post_body: {type: String, required: true},
    references: {type: Array},
    seo_description: {type: String},
    seo_title: {type: String},
    tags: {type: Array},
  }
)

const posts = mongoose.model('posts', postSchema);

export default posts;