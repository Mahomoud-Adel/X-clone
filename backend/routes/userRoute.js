import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { followUnfollowUser, getSuggestedUsers, getUserProfile, updateUser } from "../controllers/userCtrl.js";

const router = express.Router();

router.get('/profile/:username', authMiddleware, getUserProfile);
router.post('/follow/:id', authMiddleware, followUnfollowUser);
router.post('/update', authMiddleware, updateUser);
router.get('/suggestedUsers', authMiddleware, getSuggestedUsers);

export default router;