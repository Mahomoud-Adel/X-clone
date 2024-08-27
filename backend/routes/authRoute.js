import express from "express";
import { getAuthUser, logout, signIn, signUp } from "../controllers/authCtrl.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get('/auth-user', authMiddleware, getAuthUser);
router.post("/sign-in", signIn);
router.post("/sign-up", signUp);
router.post("/logout", logout);

export default router;