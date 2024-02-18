// routes/login.js

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const db = require("../db");

router.post("/", (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM users WHERE username = ?";
  db.get(sql, [username], (err, row) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }

    if (!row) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    bcrypt.compare(password, row.password, (err, result) => {
      if (err || !result) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      res.json({
        message: "Login successful",
        user: { id: row.id, username: row.username },
      });
    });
  });
});

module.exports = router;
