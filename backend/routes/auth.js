const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UsersModel } = require("../model/UsersModel.js");


const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "yoursecretkey";

// Register
router.post("/register", async (req, res) => {
  const { name, username, password } = req.body;

  const existing = await UsersModel.findOne({ username });
  if (existing) return res.status(400).json({ message: "User exists" });

  const hashed = await bcrypt.hash(password, 10);
  const user = await UsersModel.create({ name, username, password: hashed });

  res.status(201).json({ message: "User registered successfully" });
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UsersModel.findOne({ username });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user._id, username: user.username },
    JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.json({ token });
});

module.exports = router;
