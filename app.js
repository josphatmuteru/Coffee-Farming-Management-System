const express = require("express");
const path = require("path");

const app = express();

const viewRouter = require("./routes/viewRoutes");

app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "/public")));
app.set("views", path.join(__dirname, "/views"));

app.use("/", viewRouter);

module.exports = app;
