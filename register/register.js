const express = require("express");
const router = express.Router();

let users = [];

router.post("/register", (req, res) => {
  const { emailId, password } = req.body;

  // Check if the username is already taken
  const existingUser = users.find((user) => user.emailId === emailId);
  if (existingUser) {
    return res.status(400).json({ message: "Username already exists" });
  }

  // Add the new user to the database
  const newUser = { id: users.length + 1, emailId, password };
  users.push(newUser);
  res
    .status(201)
    .json({
      message: "User registered successfully",
      user: { id: newUser.id, emailId: newUser.emailId },
    });
});

module.exports = router;
