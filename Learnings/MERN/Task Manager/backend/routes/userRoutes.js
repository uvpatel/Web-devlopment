const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require("../contollers/userController");
const { protect } = require("../middleware/authMiddleware");

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Private route
router.get("/profile", protect, getUserProfile);

module.exports = router;
