import express from 'express'
import UserController from '../controllers/userController.js';

const router = express.Router();
  
router
  .get("/users", UserController.getAllUsers)
export default router;