import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  commentOnPost,
  createPost,
  deletePost,
  getAllPosts,
  getFollowingPosts,
  getUserPosts,
  likeUnlikePost,
  getLikedPosts
} from "../controllers/postCtrl.js";

const router = express.Router();

router.get("/all", authMiddleware, getAllPosts);
router.get("/likes-post/:id", authMiddleware, getLikedPosts);
router.get("/user/:username", authMiddleware, getUserPosts);
router.get("/following", authMiddleware, getFollowingPosts);
router.post("/create-post", authMiddleware, createPost);
router.post("/comment/:id", authMiddleware, commentOnPost);
router.post("/likes/:id", authMiddleware, likeUnlikePost);
router.delete("/delete-post/:id", authMiddleware, deletePost);

export default router;
