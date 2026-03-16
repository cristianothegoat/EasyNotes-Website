const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, password, name, email, phone, address, age } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const user = new User({
      username,
      password,
      name,
      email,
      phone,
      address,
      age,
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "User registration failed", error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1d" });

    res.json({ token });

  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

// Profile
router.get("/profile", async (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, "secretkey", async (err, decoded) => {
    if (err) return res.status(403).json({ message: "Token invalid" });

    try {
      const user = await User.findById(decoded.id).select("-password");
      if (!user) return res.status(404).json({ message: "User not found" });

      res.json(user);

    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  });
});

module.exports = router;