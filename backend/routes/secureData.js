const express = require("express");
const { verifyToken } = require("../middleware/auth.js");

const router = express.Router();

router.get("/profile", verifyToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}` });
});

module.exports = router;