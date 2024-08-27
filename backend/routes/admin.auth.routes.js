import express from "express";
import { adminlogin,adminlogout, adminsignup } from "../controllers/admin.auth.controller.js";
const router=express.Router();

router.post("/signup",adminsignup);
router.post("/login",adminlogin);
router.post("/logout",adminlogout);

export default router;