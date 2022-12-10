import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {type: String},
    username: {type: String, required: true},
    password: {type: String, required: true},
    blog_plan: {type: String},
    total_posts: {type: Number}
  }
)

const users = mongoose.model('users', userSchema);

export default users;