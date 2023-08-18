import { Router } from "express";
import * as Post from "../controllers/Post.js";

const router = Router();

router.get("/", Post.getPosts);

export default router;
