import jwt from "jsonwebtoken";
const generateAdminTokenAndSetCookie = (adminId, res) => {
	const token = jwt.sign({ adminId }, process.env.JWT_ADMIN_SECRET, {
		expiresIn: "1d",
	});

	res.cookie("jwt", token, {
		maxAge: 1 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
	});
};

export default generateAdminTokenAndSetCookie;