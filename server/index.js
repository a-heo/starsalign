const express = require("express");
const path = require("path");
const morgan = require("morgan");
const router = require("./router");

const app = express();

const port = 3000;
const PUBLIC_DIR = path.resolve(__dirname, "../client/dist");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use("/", express.static(PUBLIC_DIR));

app.use("/user", router);

app.listen(port, () => {
  console.log(`starsalign is listening at http://localhost:${port}`);
});

module.exports = app;
