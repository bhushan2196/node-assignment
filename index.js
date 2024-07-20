const express = require("express");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :date[web] :http-version :url",
    { stream: fs.createWriteStream(path.join("./src/", "access.log")) }
  )
);
app.get("/get-users", (req, res) => {
  res.json({ message: "this is home page", response: `${res.statusCode}` });
});
app.post("/add-user", (req, res) => {
  res.json({ message: "data posted", response: `${res.statusCode}` });
});
app.put("/user/:id", (req, res) => {
  res.json({ message: "data updated", response: `${res.statusCode}` });
});
app.delete("/user/:id", (req, res) => {
  res.json({ message: "data deleted", response: `${res.statusCode}` });
});

app.listen(3000, () => {
  console.log("server started");
});
