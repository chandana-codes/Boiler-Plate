const express = require("express");
const router = require("Router");

//Sample Data
const users = [
  { id: 1, emailId: "user1@gmail.com", password: "password1" },
  { id: 2, emailId: "user2@gmail.com", password: "password2" },
];

router.post("/login", (request, response) => {
  const { emailId, password } = reqest.body;

  //Authentication
  const user = users.find((user) => {
    user.emailId === emailId && user.password === password;
  });
  if (user) {
    // Authentication successful
    response.json({
      message: "Login Successfull",
      id: { id: user.id, emailId: user.emailId },
    });
  } else {
    // Authentication failed
    response.status(401).json({ message: "Invalid email or password" });
  }
});

module.exports = router;
