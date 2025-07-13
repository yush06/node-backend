const express = require("express");
const app = express(); // ✅ app is defined here

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello, this is your backend speaking! Test14");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
