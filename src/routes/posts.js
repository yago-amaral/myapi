import { Router } from "express";
import * as Post from "../controllers/Post.js";

const router = Router();

router.get("/", Post.getPosts);

router.get("/:id", Post.getSinglePost);

router.post("/", Post.createPost);

router.delete("/:id", Post.deletePost);

export default router;
