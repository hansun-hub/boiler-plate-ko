const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://hansun:abcd1234@cluster0.fbr8iby.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! 안녕하세여!!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
