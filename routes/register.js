const express = require("express");
const bcrypt = require("bcrypt");
const sqlite3 = require("sqlite3").verbose();

const router = express.Router();
const db = new sqlite3.Database("mydatabase.db");

router.post("/", (req, res) => {
  // Handle registration logic
  const { emailId, password } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Store the user in the database
    db.run(
      "INSERT INTO users (emailId, password) VALUES (?, ?)",
      [emailId, hashedPassword],
      (err) => {
        if (err) {
          return res.status(500).json({ error: "Internal Server Error" });
        }

        res.json({ message: "Registration successful" });
      }
    );
  });
});

module.exports = router;
