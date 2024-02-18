// routes/logout.js

const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  // You can clear the session, token, or perform any necessary logout operations here
  res.json({ message: "Logout successful" });
});

module.exports = router;
