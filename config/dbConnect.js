import mongoose from "mongoose";

mongoose.connect("mongodb+srv://lpgoulart:lpgoulart@blog.rhal9cr.mongodb.net/blog-post")
mongoose.set('strictQuery', true);

let db = mongoose.connection;

export default db;