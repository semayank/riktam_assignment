import jwt from "jsonwebtoken";
import Admin from "../models/admin.model.js";

const protectAdminRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_ADMIN_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }
    const admin = await Admin.findById(decoded.adminId).select("-password");

    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }
    req.admin = admin;

    next();
  } catch (error) {
    console.log("Error in protectAdminRoute middleware: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectAdminRoute;
