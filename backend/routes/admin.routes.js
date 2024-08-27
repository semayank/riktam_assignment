import express from "express";

import { getUsersForTable ,deleteUser } from "../controllers/admin.controller.js";
import protectAdminRoute from "../middleware/protectAdminRoute.js";

const router = express.Router();

router.get("/", protectAdminRoute, getUsersForTable);
router.delete("/delete/user/:id" , protectAdminRoute, deleteUser);

export default router;