const express = require("express");

const app = express();

const path = require("path");

app.use(express.static("public"));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "public"));
// });

app.listen(5000);
