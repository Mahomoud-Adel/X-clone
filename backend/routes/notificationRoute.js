import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { deleteNotification, deleteNotifications, getNotifications } from "../controllers/notificationCtrl.js";


const router = express.Router();

router.get('/get-notification', authMiddleware, getNotifications);
router.delete('/delete-notifications', authMiddleware, deleteNotifications);
router.delete('/:id', authMiddleware, deleteNotification);


export default router;