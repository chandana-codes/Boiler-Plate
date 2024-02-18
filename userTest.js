const express = require("express");
const app = express();
app.use(express.json());

const validatePassword = (password) => {
  return password.length >= 8;
};

app.post("/", async (request, response) => {
  const { emailId, password } = request.body;
});
app.listen(3010);

module.exports = app;
