import { Router } from "express";
import * as Home from "../controllers/Home.js";

const router = Router();

router.get("/", Home.getHome);

export default router;
