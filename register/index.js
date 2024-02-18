const express = require("express");
const loginRouter = require("./login");
const logoutRouter = require("./logout");
const registerRouter = require("./register");

const app = express();
const port = 3000;

app.use(express.json());

// Mount the routes
app.use("/", loginRouter);
app.use("/", logoutRouter);
app.use("/", registerRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
