import express from "express";
import { applyForSeminar, getapplications } from "../controllers/application.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/apply", verifyToken, applyForSeminar);
router.get("/applications", getapplications);

export default router;
