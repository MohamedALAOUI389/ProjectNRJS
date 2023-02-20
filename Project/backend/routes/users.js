import express from "express";
import {
    GetUser,
    GetUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/:id", verifyToken, GetUser);
router.get("/:id/friends", verifyToken, GetUserFriends)

router.patch("/:id/:friendId",verifyToken, addRemoveFriend);

export default router;