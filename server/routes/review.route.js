import express from "express";
import { getreviews, review } from "../controllers/review.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/", verifyToken, review);
router.get("/getreviews", getreviews);

export default router;