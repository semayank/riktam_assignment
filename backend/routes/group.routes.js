import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { createGroup } from "../controllers/group.controller.js";

const router = express.Router();

router.post("/create",protectRoute,createGroup);


export default router;
