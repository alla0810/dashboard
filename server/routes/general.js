import express from "express";
import { getAllUser, getUser } from "../controllers/general.js"

const router = express.Router();

router.get("/user/", getAllUser);
router.get("/user/:id", getUser);

export default router;