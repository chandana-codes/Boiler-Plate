// routes/register.js

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const db = require("../mydatabase.db");

router.post("/", (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }

    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    db.run(sql, [username, hash], (err) => {
      if (err) {
        return res.status(400).json({ message: "Username already exists" });
      }
      res.status(201).json({ message: "User registered successfully" });
    });
  });
});

module.exports = router;
