import express from 'express'
import PostController from '../controllers/postController.js'
import UserController from '../controllers/userController.js';

const router = express.Router();

router
  .get("/posts", PostController.getAllPosts)
  .get("/posts/:id", PostController.getPostById)
  .post("/posts", PostController.addPost)
  .put("/posts/:id", PostController.updatePost)
  .delete("/posts/:id", PostController.deletePost)
  
router
  .get("/users", UserController.getAllUsers)
export default router;