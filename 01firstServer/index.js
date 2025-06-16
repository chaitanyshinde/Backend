require("dotenv").config();
const express = require("express");

const app = express();
const port = 3000;

const data = [
  {
    name: "Chaitany",
    age: 22,
    city: "pune",
  },
  {
    name: "Ram",
    age: 22,
    city: "pune",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/login", (req, res) => {
  res.send("<h1>We are on login page!</h1>");
});

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
