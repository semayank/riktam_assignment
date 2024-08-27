import bcrypt from "bcryptjs";
import Admin from "../models/admin.model.js";
import generateAdminTokenAndSetCookie from "../utils/generateAdminToken.js";

export const adminsignup = async (req, res) => {
  try {
    const { fullName, adminname, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const admin = await Admin.findOne({ adminname });

    if (admin) {
      return res.status(400).json({ error: "Adminname already exists" });
    }

    // HASH PASSWORD HERE
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = new Admin({
      fullName,
      adminname,
      password: hashedPassword,
    });

    if (newAdmin) {
      // Generate JWT token here
      generateAdminTokenAndSetCookie(newAdmin._id, res);
      await newAdmin.save();

      res.status(201).json({
        _id: newAdmin._id,
        fullName: newAdmin.fullName,
        adminname: newAdmin.adminname,
      });
    } else {
      res.status(400).json({ error: "Invalid admin data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const adminlogin = async (req, res) => {
  try {
    const { adminname, password } = req.body;
    console.log(adminname);
    const admin = await Admin.findOne({ adminname });    
    if (!admin) return res.status(400).json({ error: "Invalid adminname is provided" });
    const isPasswordCorrect = await bcrypt.compare(password, admin.password || "");
    if (!isPasswordCorrect)
      return res.status(400).json({ error: "Invalid password" });

    generateAdminTokenAndSetCookie(admin._id, res);

    res.status(200).json({
      _id: admin._id,
      fullName: admin.fullName,
      adminname: admin.adminname,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const adminlogout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Admin Logged out successfully" });
  } catch (error) {
    console.log("Error in admin logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
