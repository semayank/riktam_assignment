import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar ,getUsersForGroupTable } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
// router.get("/getgroup",protectRoute,getGroupsAndUsersForSidebar);
router.get("/group",protectRoute,getUsersForGroupTable);
export default router;
